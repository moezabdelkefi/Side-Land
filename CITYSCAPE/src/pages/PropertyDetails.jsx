import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageTitle from "../common/PageTitle";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import PropertyDetailsSection from "../components/PropertyDetailsSection";
import Logo from "../common/Logo";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Footer from "../common/Footer";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties/${id}`
        );
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Error fetching property details");
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-logo-container">
        <Logo />
        <style>
          {`
            .loading-logo-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .loading-logo-container svg {
              animation: spin 2s linear infinite;
            }
          `}
        </style>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!property) {
    return <div>No property details available</div>;
  }

  return (
    <>
      <OffCanvas />
      <MobileMenu />
      <PageTitle title="Grow and more - Property Details" />
      <main className="body-bg">
        <Header
          headerClass="dark-header has-border"
          logoBlack={false}
          logoWhite={true}
          headerMenusClass="mx-auto"
          btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
          btnLink="/ListProperty"
          btnText="List Your Property"
          spanClass="icon-right text-gradient"
          showHeaderBtn={true}
          showOffCanvasBtn={false}
          offCanvasBtnClass=""
          showContactNumber={false}
        />
        <Breadcrumb pageTitle="Property Details" pageName={property.title} />
        <PropertyDetailsSection property={property} />
        <Cta ctaClass="" propertyTitle={property.title} />

        <Footer/>
      </main>
    </>
  );
};

export default PropertyDetails;
