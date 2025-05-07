import React from "react";
import { galleries } from "../data/HomeTwoData/HomeTwoData";
import SectionHeading from "../common/SectionHeading";

const Gallery = () => {
  const titles = [
    "Maximizing Earnings",
    "Timely Rent Collection",
    "Thorough Reporting and Accountability",
    "Dependable Property Maintenance",
  ];

  return (
    <section className="gallery-section padding-y-60">
      <div className="container container-two">
        <h4
          style={{
            textAlign: "center",
            color: "black",
          }}
        >
          Partnering with us means joining forces with real estate experts
          dedicated to growth, fostering a shared journey built on commitment,
          transparency, integrity, and reliability. Together, we grow and
          succeed.
        </h4>

        <div className="row gy-4">
          {galleries.map((gallery, galleryIndex) => {
            return (
              <div className="col-lg-6 col-sm-6 col-xs-12" key={galleryIndex}>
                <div
                  className="gallery-thumb"
                  style={{ position: "relative", height: "350px" }}
                >
                  <div
                    style={{
                      content: '""',
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                      zIndex: "1",
                    }}
                  ></div>
                  <img
                    src={gallery.image}
                    alt="Gallery Image"
                    className="cover-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: "0",
                    }}
                  />
                  <div
                    className="gallery-title"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#C99200", // Changed color to #C99200
                      textAlign: "center",
                      zIndex: "2",
                      fontSize: "1.5rem", // Increased font size
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    {titles[galleryIndex]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
