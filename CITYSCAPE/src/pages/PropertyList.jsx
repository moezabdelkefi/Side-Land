import React, { useEffect, useState, useContext, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import PropertyItem from "../components/items/PropertyItem";
import PageTitle from "../common/PageTitle";
import LogoImg from "/assets/images/logo/logo.png?url";
import PropertyFilterBottom from "../components/PropertyFilterBottom";
import Pagination from "../common/Pagination";
import { PropertyFilterContext } from "../contextApi/PropertyFilterContext";
import debounce from "lodash.debounce";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Footer from "../common/Footer";

const PropertyList = () => {
  const location = useLocation();
  const { dataStatus, setDataStatus } = useContext(PropertyFilterContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const propertiesPerPage = 6;

  const fetchProperties = useCallback(
    debounce(async (status, type, filterType, currentPage) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`,
          {
            params: {
              status: status || dataStatus,
              type: type ? type.split(",") : undefined,
              excludeType:
                status === "For Sale" && !type ? "Offices" : undefined,
              offPlanType:
                filterType === "Off Plan"
                  ? [
                      "Off Plan Projects",
                      "Off Plan Apartments",
                      "Off Plan Townhouses",
                      "Off Plan Villas",
                    ]
                  : filterType === "Ready"
                  ? { $exists: false }
                  : undefined,
              page: currentPage,
              limit: propertiesPerPage,
            },
          }
        );
        setProperties(response.data.properties);
        setTotalProperties(response.data.total);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Error fetching properties");
        setLoading(false);
      }
    }, 300),
    [dataStatus, propertiesPerPage]
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");
    const type = queryParams.get("type");

    if (status) {
      setDataStatus(status);
    }

    setLoading(true);
    fetchProperties(status, type, filterType, currentPage);
  }, [
    dataStatus,
    location.search,
    setDataStatus,
    filterType,
    currentPage,
    fetchProperties,
  ]);

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentPage(1);
  };

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
        <img src={LogoImg} alt="Loading..." style={{ maxWidth: "100px" }} />
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
      <PageTitle title={`Properties - ${dataStatus}`} />
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
        <Breadcrumb
          pageTitle={`Properties - ${dataStatus}`}
          pageName={dataStatus}
        />
        <section className="property bg-gray-100 padding-y-120">
          <div className="container">
            <div
              className="filter-buttons"
              style={{ display: "flex", gap: "10px" }}
            >
              <button
                className={`form-select common-input pill  ${
                  filterType === "All" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("All")}
                style={
                  filterType === "All"
                    ? { backgroundColor: "#C99200", color: "white" }
                    : {}
                }
              >
                All
              </button>
              <button
                className={`form-select common-input pill  ${
                  filterType === "Off Plan" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("Off Plan")}
                style={
                  filterType === "Off Plan"
                    ? { backgroundColor: "#C99200", color: "white" }
                    : {}
                }
              >
                Off Plan
              </button>
              <button
                className={`form-select common-input pill  ${
                  filterType === "Ready" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("Ready")}
                style={
                  filterType === "Ready"
                    ? { backgroundColor: "#C99200", color: "white" }
                    : {}
                }
              >
                Ready
              </button>
            </div>
            <div className="property-filter">
              <PropertyFilterBottom
                currentPage={currentPage}
                totalProperties={totalProperties}
                propertiesPerPage={propertiesPerPage}
                onPageChange={handlePageChange}
              />
            </div>
            {properties.length === 0 ? (
              <div className="text-center">
                <h3>No properties available yet</h3>
                <p>Please check back later or explore other categories.</p>
              </div>
            ) : (
              <div
                className="row gy-4 property-item-wrapper"
                style={{ marginBottom: "40px" }}
              >
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
              totalPages={Math.ceil(totalProperties / propertiesPerPage)}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
        <Footer/>
      </main>
    </>
  );
};

export default PropertyList;
