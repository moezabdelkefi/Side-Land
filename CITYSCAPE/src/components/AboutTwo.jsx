import React from "react";
import SectionHeading from "../common/SectionHeading";
import { aboutTwoRight, checkLists } from "../data/HomeTwoData/HomeTwoData";
import Button from "../common/Button";

const AboutTwo = () => {
  return (
    <>
      {/* ======================== About Two Section Start ========================== */}
      <section className="about-two padding-y-60">
        <div className="container container-two">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-two__content">
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
                  Know About Us
                </h2>
                <h4
                  style={{
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  Partnering with us means joining forces with real estate
                  experts dedicated to growth, fostering a shared journey built
                  on commitment, transparency, integrity, and reliability.
                  Together, we grow and succeed.
                </h4>
                <div className="">
                  <Button
                    btnLink="/about-us"
                    btnClass="btn-main"
                    btnText="Learn more"
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

export default AboutTwo;
