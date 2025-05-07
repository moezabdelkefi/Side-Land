import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import PropertyItem from "../components/items/PropertyItem";
import PageTitle from "../common/PageTitle";
import Pagination from "../common/Pagination";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Footer from "../common/Footer";

const FilteredProperties = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 8;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`,
          {
            params: {
              ...Object.fromEntries(queryParams.entries()),
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
  }, [location.search, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src="/assets/images/logo/logoo.png" alt="Loading..." style={{ maxWidth: "100px" }} />
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
      <PageTitle title="Filtered Properties" />
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
        <Breadcrumb pageTitle="Filtered Properties" />
        <section className="property bg-gray-100 padding-y-120">
          <div className="container">
            {properties.length === 0 ? (
              <div className="text-center">
                <h3>No properties available yet</h3>
                <p>Please check back later or explore other categories.</p>
              </div>
            ) : (
              <div className="row gy-4 property-item-wrapper">
                {properties.map((property, index) => (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <PropertyItem
                      itemClass="property-item style-two style-shaped"
                      btnClass="text-gradient fw-semibold"
                      property={property}
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

export default FilteredProperties;