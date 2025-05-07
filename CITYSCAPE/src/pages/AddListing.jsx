import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import AddListingSection from "../components/AddListingSection";
import PageTitle from "../common/PageTitle";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../common/Footer";

const AddListing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.role === "admin") {
          setIsAdmin(true);
        } else {
          navigate("/login");
        }
      } catch (error) {
        toast.error("Access denied. Admins only.");
        navigate("/login");
      }
    };

    checkAdmin();
  }, [navigate]);

  if (!isAdmin) {
    return <div></div>;
  }

  return (
    <>
      <PageTitle title="grow and more - update property" />

      <main className="body-bg">
        {/* Header */}
        <Header
          headerClass="dark-header has-border"
          logoBlack={false}
          logoWhite={true}
          headerMenusClass="mx-auto"
          btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
          btnLink="/account"
          btnText="My Account"
          spanClass="icon-right text-gradient"
          showHeaderBtn={true}
          showOffCanvasBtn={false}
          offCanvasBtnClass=""
          showContactNumber={false}
        />

        {/* Breadcrumb */}
        <Breadcrumb pageTitle="Update Property" pageName="Update Property" />

        {/* Add Listing Section */}
        <AddListingSection />

        {/* FooterTwo */}
        <Footer/>
      </main>
    </>
  );
};

export default AddListing;
