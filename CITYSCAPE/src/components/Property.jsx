import React, { useEffect, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import PropertyItem from "./items/PropertyItem";
import Button from "../common/Button";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Property = ({ status }) => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`,
          {
            params: {
              status: status || "All",
              limit: 6,
              sort: "createdAt",
              order: "desc",
            },
          }
        );
        setProperties(response.data.properties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, [location, status]);

  return (
    <>
      <section className="property padding-y-120">
        <div className="container container-two">
          <br />
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                padding: "5px 10px",
                borderRadius: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.11em",
                display: "inline-block",
              }}
            >
              Latest property
            </h2>
            <h4
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "20px",
              }}
              className="mb-5"
            >
              Investing in off-plan projects has never been more convenient.
            </h4>
          </div>

          <div className="row gy-4 property-item-wrapper" style={{ marginBottom: "40px" }}>
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
          <div className="text-center property__btn">
            <Button
              btnLink="/property"
              btnClass="btn-main mb-5"
              btnText="Explore More"
              spanClass="icon-right"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;