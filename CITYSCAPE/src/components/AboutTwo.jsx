import React from "react";

const AboutTwo = () => {
  return (
    <section
      className="why-invest-dubai"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="container">
        <h2 className="section-title">WHY INVEST IN DUBAI</h2>
        <div className="benefits-row">
          <div className="benefit-item">
            <img
              src="/assets/images/icons/growth.png"
              alt="Economic Growth Icon"
              className="benefit-icon"
            />
            <span className="iconTitle">Economic growth</span>
          </div>
          <div className="benefit-item">
            <img
              src="/assets/images/icons/tax.png"
              alt="0% Tax Icon"
              className="benefit-icon"
            />
            <span className="iconTitle">0% tax</span>
          </div>
          <div className="benefit-item">
            <img
              src="/assets/images/icons/roi.png"
              alt="High ROI Icon"
              className="benefit-icon"
            />
            <span className="iconTitle">High ROI</span>
          </div>
          <div className="benefit-item">
            <img
              src="/assets/images/icons/location.png"
              alt="Strategic Location Icon"
              className="benefit-icon"
            />
            <span className="iconTitle">Strategic location</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .iconTitle {
          color: white;
        }
        .why-invest-dubai {
          padding: 80px 0;
          background-color: #fff;
          text-align: left;
        }

        .section-title {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 15px;
        }

        .section-title:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 80px;
          height: 4px;
          background: #c99200;
        }

        .benefits-row {
          display: flex;
          justify-content: center;
          gap: 7rem; /* Increased gap */
          flex-wrap: wrap;
          max-width: 800px;
          margin: 0 auto;
        }

        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 1.2rem;
          color: #333;
          font-weight: 500;
          white-space: nowrap;
        }

        .benefit-icon {
          width: 50px; /* Increased size */
          height: 50px; /* Increased size */
          margin-bottom: 0.75rem; /* Slightly more space below the icon */
          fill: #d4af37; /* Gold color */
        }

        @media (max-width: 768px) {
          .benefits-row {
            gap: 2rem; /* Adjusted gap for smaller screens */
          }

          .benefit-item {
            font-size: 1rem;
          }
          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .benefits-row {
            flex-direction: column;
            gap: 1.5rem; /* Adjusted gap for very small screens */
          }

          .benefit-item {
            white-space: normal;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutTwo;
