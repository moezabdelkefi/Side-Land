import React from "react";
import TabFilter from "../common/TabFilter";

const VideoPopup = () => {
  return (
    <>
      <div className="video-popup">
        <div className="video-popup__thumb">
          <div className="video-popup__shadow"></div>
          <video autoPlay loop muted playsInline className="cover-video">
            <source src="/assets/images/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-popup__title-container">
            <h2 className="video-popup__title">
              Unlock Your Dream Home in Dubai
            </h2>
          </div>
        </div>
        <div className="tab-filter-container">
          <TabFilter colClass="col-lg-3 col-sm-6 col-xs-6" />
        </div>
      </div>
      <style jsx>{`
        .video-popup__thumb {
          position: relative;
          overflow: hidden;
          height: 100vh;
        }

        .video-popup__shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
          pointer-events: none;
        }

        .cover-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-popup__title-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          z-index: 2;
        }

        .video-popup__title {
          font-size: 48px;
          font-weight: bold;
          color: #C99200;
        }

        .tab-filter-container {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .video-popup__thumb {
            height: auto;
          }

          .video-popup__shadow {
            display: none;
          }

          .cover-video {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .video-popup__title {
            font-size: 24px;
          }

          .tab-filter-container {
            position: static;
            transform: none;
            width: 100%;
            padding: 11px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .cover-video {
            width: 100%;
            height: 50vh;
            object-fit: cover;
          }

          .video-popup__title {
            font-size: 36px;
          }

          .tab-filter-container {
            bottom: 20%;
          }
        }

        @media (min-width: 1025px) {
          .cover-video {
            width: 100%;
            height: 100vh;
            object-fit: cover;
          }

          .video-popup__title {
            font-size: 48px;
          }

          .tab-filter-container {
            bottom: 10%;
          }
        }
      `}</style>
    </>
  );
};

export default VideoPopup;
