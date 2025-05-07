import React from "react";
import { bannerTwoContent } from "../data/HomeTwoData/HomeTwoData";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  return (
    <>
      {/* ============================= Banner Two Start ============================= */}
      <div className="banner-two">
        <div className="container container-two">
          <div className="banner-two__content" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <h4
              style={{
                padding: "5px 10px",
                borderRadius: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.11em",
                display: "inline-block",
              }}
            >
              {bannerTwoContent.title}
              <span className="text">{bannerTwoContent.boldTitle}</span>{" "}
            </h4>
            <div>
              <p className="contact-content__desc font-18">
                {bannerTwoContent.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ============================= Banner Two End ============================= */}
    </>
  );
};

export default BannerTwo;