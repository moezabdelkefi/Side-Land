import React from "react";
import TabFilter from "../common/TabFilter";

const BannerBackground = () => {
  return (
    <>
      <div className="banner-containerr">
        <div className="banner-background">
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h1 className="banner-title">
              Invest In The Future Of Dubai Real Estate
            </h1>
            <button className="banner-button">
              Explore Properties <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner-containerr {
          position: relative;
          width: 100%;
        }

        .banner-background {
          height: 80vh; /* Reduced from 100vh */
          min-height: 500px; /* Added minimum height */
          max-height: 800px; /* Added maximum height for very large screens */
          background-image: url("/assets/images/thumbs/banner3.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }

        .banner-content {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
          z-index: 2;
          max-width: 600px;
        }

        .banner-title {
          color: #fff;
          font-size: clamp(2rem, 5vw, 3.5rem); /* Responsive font size */
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .banner-button {
          background: #c99200;
          color: white;
          border: none;
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .banner-button:hover {
          background: #e0a800;
        }

        .banner-button i {
          margin-left: 8px;
        }

        .tab-filter-wrapper {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .banner-background {
            height: 60vh; /* Increased from 50vh for better mobile display */
            min-height: 400px;
          }

          .banner-content {
            left: 5%;
            padding-right: 5%;
            top: 40%;
            max-width: 90%;
          }

          .tab-filter-wrapper {
            position: static;
            transform: none;
            width: 100%;
            padding: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .banner-background {
            height: 70vh; /* Adjusted from 60vh */
          }

          .tab-filter-wrapper {
            bottom: 15%;
          }
        }

        /* Extra large screens */
        @media (min-width: 1600px) {
          .banner-background {
            height: 70vh;
          }
          
          .banner-content {
            left: 15%;
          }
        }
      `}</style>
    </>
  );
};

export default BannerBackground;