import React from "react";
import SectionHeading from "../common/SectionHeading";
import {
  aboutList,
  aboutTwoRight,
  checkLists,
} from "../data/HomeTwoData/HomeTwoData";
import Button from "../common/Button";

const Aboutservicelist = () => {
  return (
    <>
      <section className="about-two padding-y-60">
        <div className="container container-two">
          <div className="row gy-4 align-items-center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                Why Choose Us
              </h2>
            </div>
            <h4
              style={{
                textAlign: "center",
                color: "black",
              }}
            >
              Your Property, Our Priority
            </h4>
            <div className="col-lg-6">
              <div className="about-two__content">
                <SectionHeading
                  title=""
                  headingClass="style-left"
                  subtitle="List Your Property with Grow and More"
                  subtitleClass="subtitle-residential"
                  renderDesc={true}
                  desc="Grow and More is a trusted real estate partner dedicated to delivering exceptional value to clients looking to list their properties. With a strong focus on Trust & Integrity, we ensure every transaction is transparent and reliable. Our Established Network connects sellers with a vast pool of potential buyers, maximizing opportunities for successful deals. Grow and More offers Maximized Visibility through innovative marketing strategies that showcase properties to the right audience. Backed by Legal Expertise, we handle the complexities of property transactions seamlessly. With Strong Marketing Support, clients benefit from tailored campaigns designed to generate High Leads Received, ensuring quicker and more profitable results."
                />
                <SectionHeading
                  title=""
                  headingClass="style-left"
                  subtitle=""
                  subtitleClass=""
                  renderDesc={true}
                  renderSubtitle={false}
                  desc="By choosing Grow and More, clients gain access to Exclusive Opportunities and a Seamless Process that makes selling a property efficient and stress-free."
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <img src={aboutList.thumb} alt="" className="cover-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================== About Two Section End ========================== */}
    </>
  );
};

export default Aboutservicelist;
