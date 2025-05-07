import React from "react";
import SectionHeading from "../common/SectionHeading";
import { aboutTwoRight, checkLists } from "../data/HomeTwoData/HomeTwoData";
import Button from "../common/Button";

const AboutserviceRent = () => {
  return (
    <>
      {/* ======================== About Two Section Start ========================== */}
      <section className="about-two padding-y-60">
        <div className="container container-two">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-two__content">
                <h4
                  style={{
                    padding: "5px 10px",
                    borderRadius: "3px",
                    textTransform: "uppercase",
                    letterSpacing: "0.11em",
                    display: "inline-block",
                  }}
                >
                  Why Choose Us
                </h4>
                <SectionHeading
                  title=""
                  headingClass="style-left"
                  subtitle="Residential Properties"
                  subtitleClass="subtitle-residential"
                  renderDesc={true}
                  desc="Whether you're seeking a studio apartment, a luxurious penthouse, or a spacious villa, our diverse portfolio caters to every need and preference. We also offer an impressive range of luxury properties to meet your highest expectations."
                  renderButton={false}
                  buttonClass="btn-main"
                  buttonText="View More"
                />
                <SectionHeading
                  headingClass="style-left"
                  subtitle="Commercial Properties"
                  subtitleClass="subtitle-commercial"
                  title=""
                  renderDesc={true}
                  desc="We offer a wide range of commercial properties for sale. Our portfolio includes offices and retail shops in key business districts like Business Bay and DIFC as well as properties in major shopping centers across Dubai and Ajman."
                  renderButton={false}
                  buttonClass="btn-main"
                  buttonText="View More"
                />
                <div className="about-two__button">
                  <Button
                    btnLink="/contact"
                    btnClass="btn-main"
                    btnText="Contact Us"
                    spanClass="icon-right icon"
                    iconClass="fas fa-arrow-right"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two__thumb">
                <img src={aboutTwoRight.thumb} alt="" className="cover-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================== About Two Section End ========================== */}
    </>
  );
};

export default AboutserviceRent;
