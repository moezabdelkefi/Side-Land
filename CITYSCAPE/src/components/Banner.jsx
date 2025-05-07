import React from "react";
import { bannerContent } from "./../data/HomeOneData/HomeOneData";
import SectionHeading from "../common/SectionHeading"; // Make sure to import SectionHeading

const Banner = () => {
  return (
    <>
      {/*========================== Banner Section Start ==========================*/}
      <section className="banner">
        <div className="container container-two">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-inner position-relative">
                  <div className="banner-content">
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
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                      className="mb-5"
                    >
                      Investing in off-plan projects has never been more
                      convenient.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="banner-thumb">
                  <img src={bannerContent.thumb} alt="" />
                </div>
              </div>
              <SectionHeading
                headingClass="style-left flx-between align-items-end gap-3 justify-content-start"
                subtitleClass=""
                renderDesc={false}
                desc=""
                renderButton={true}
                buttonLink="/contact"
                buttonClass="btn-main"
                buttonText="List Your Property"
                renderSubtitle={false}
              />
            </div>
          </div>
        </div>
      </section>
      {/*========================== Banner Section End ==========================*/}
    </>
  );
};

export default Banner;
