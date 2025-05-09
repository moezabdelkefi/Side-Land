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
      <section className="property padding-y-100">
        <div className="container container-two">
          <br />
          <div style={{ textAlign: "left" }}>
            <h2 className="about-title">Featured Properties</h2>
          </div>

          <div
            className="row gy-4 property-item-wrapper"
            style={{ marginBottom: "40px" }}
          >
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
          {/* <div className="text-center property__btn">
            <Button
              btnLink="/property"
              btnClass="btn-main mb-5"
              btnText="Explore More"
              spanClass="icon-right"
            />
          </div> */}
        </div>
        <style jsx>{`
          .about-title {
            font-size: 2.5rem;
            color: white;
            margin-bottom: 1.5rem;
            font-weight: 700;
            position: relative;
            padding-bottom: 15px;
          }

          .about-title:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 80px;
            height: 4px;
            background: #c99200;
          }
        `}</style>
      </section>
    </>
  );
};

export default Property;
