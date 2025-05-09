import React from "react";
import TabFilter from "../common/TabFilter";

const BannerBackground = () => {
  return (
    <>
      <div className="banner-containerr">
        <div className="banner-background">
          <div className="banner-overlay"></div>
          {/* Added content container */}
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
          height: 100vh;
          background-image: url("/assets/images/thumbs/banner3.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative; /* Added for content positioning */
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }

        /* New content styles */
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
          font-size: 3rem;
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
          background: #c99200;
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
            height: 50vh;
          }

          .banner-content {
            left: 5%;
            padding-right: 5%;
            top: 40%;
          }

          .banner-title {
            font-size: 2rem;
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
            height: 60vh;
          }

          .banner-title {
            font-size: 2.5rem;
          }

          .tab-filter-wrapper {
            bottom: 15%;
          }
        }
      `}</style>
    </>
  );
};

export default BannerBackground;
