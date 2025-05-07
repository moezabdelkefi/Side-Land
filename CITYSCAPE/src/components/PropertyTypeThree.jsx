import React from "react";
import SectionHeading from "../common/SectionHeading";
import { propertyThreeTypes } from "../data/HomeThreeData/HomeThreeData";
import PropertyTypeThreeItem from "./items/PropertyTypeThreeItem";

const PropertyTypeThree = () => {
  return (
    <>
      <section className="property-type-three padding-t-60 padding-b-60">
        <div className="container container-two">
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                padding: "5px 10px",
                borderRadius: "3px",
                backgroundColor: "hsl(var(--white))",
                textTransform: "uppercase",
                letterSpacing: "0.11em",
                display: "inline-block",
              }}
              className=""
            >
              Our Services
            </h2>
            <h4
              style={{
                textAlign: "center",
                color: "black",
                paddingBottom: "20px",
              }}
            >
              Transforming your real estate dreams into reality with simplicity
              and confidence.
            </h4>
          </div>
          <div className="row gy-4">
            {propertyThreeTypes.map((propertyTypeItem, index) => {
              return (
                <div className="col-xl-4 col-sm-6 col-xs-6" key={index}>
                  <PropertyTypeThreeItem propertyTypeItem={propertyTypeItem} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyTypeThree;
