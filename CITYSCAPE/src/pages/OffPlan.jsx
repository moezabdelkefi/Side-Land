import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import SectionHeading from "../common/SectionHeading";
import PageTitle from "../common/PageTitle";
import axios from "axios";
import PropertyItem from "../components/items/PropertyItem";
import Pagination from "../common/Pagination";
import LogoImg from "/assets/images/logo/logoo.png?url";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Footer from "../common/Footer";

const OffPlan = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 8;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`,
          {
            params: {
              offPlanType: [
                "Off Plan Projects",
                "Off Plan Apartments",
                "Off Plan Townhouses",
                "Off Plan Villas",
              ],
              page: currentPage,
              limit: propertiesPerPage,
            },
          }
        );
        setProperties(response.data.properties);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Error fetching properties");
        setLoading(false);
      }
    };

    fetchProperties();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src={LogoImg}
          alt="Loading..."
          className="loading-logo"
          style={{ maxWidth: "100px" }}
        />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <OffCanvas />
      <MobileMenu />
      <PageTitle title="Grow And More Off Plan" />
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

        {/* BreadCrumb */}
        <Breadcrumb pageTitle="Off Plan" pageName="Off Plan" />
        <br />
        <section className="property bg-gray-100 padding-y-120">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  padding: "5px 10px",
                  borderRadius: "3px",
                  backgroundColor: "hsl(var(--white))",
                  textTransform: "uppercase",
                  letterSpacing: "0.11em",
                  display: "inline-block",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  marginBottom: "6rem",
                }}
                className=""
              >
                Welcome to the realm of off-plan property investing
              </h2>
            </div>

            {properties.length === 0 ? (
              <div className="text-center">
                <h3>No properties available yet</h3>
                <p>Please check back later or explore other categories.</p>
              </div>
            ) : (
              <div className="list-grid-item-wrapper property-item-wrapper show-two-item row gy-4">
                {properties.map((property, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <PropertyItem
                      itemClass=""
                      btnClass=""
                      property={property}
                      badgeText={property.status}
                      badgeClass="property-item__badge"
                      iconsClass=""
                      btnRenderBottom={false}
                      btnRenderRight={true}
                    />
                  </div>
                ))}
              </div>
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(properties.length / propertiesPerPage)}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default OffPlan;
