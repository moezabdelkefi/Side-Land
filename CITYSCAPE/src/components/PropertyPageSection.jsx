import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import PropertyItem from "./items/PropertyItem";
import Pagination from "../common/Pagination";
import PropertyFilterBottom from "./PropertyFilterBottom";
import PropertyFilterForm from "./PropertyFilterForm";
import { PropertyFilterContext } from "../contextApi/PropertyFilterContext";
import { useLocation } from "react-router-dom";
import Logo from "../common/Logo";

const PropertyPageSection = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dataStatus, dataType, dataBedrooms, dataBathrooms, selectedSort } =
    useContext(PropertyFilterContext);
  const location = useLocation();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`,
          {
            params: {
              status: dataStatus !== "All" ? dataStatus : undefined,
              type: dataType !== "All" ? dataType : undefined,
              bedrooms: dataBedrooms !== "All" ? dataBedrooms : undefined,
              bathrooms: dataBathrooms !== "All" ? dataBathrooms : undefined,
              sort: selectedSort !== "All" ? selectedSort : undefined,
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
  }, [
    dataStatus,
    dataType,
    dataBedrooms,
    dataBathrooms,
    selectedSort,
    location.pathname,
  ]);

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

  return (
    <>
      <section className="property bg-gray-100 padding-y-120">
        <div className="container container-two">
          <div className="property-filter">
            <PropertyFilterForm />
            <PropertyFilterBottom />
          </div>

          <div className="list-grid-item-wrapper property-item-wrapper show-two-item row gy-4">
            {properties.map((property, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
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

          <Pagination />
        </div>
      </section>
    </>
  );
};

export default PropertyPageSection;