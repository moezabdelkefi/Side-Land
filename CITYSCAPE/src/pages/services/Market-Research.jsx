import React, { useEffect } from "react";
import Header from "../../common/Header";
import FooterTwo from "../../common/FooterTwo";
import OffCanvas from "../../common/OffCanvas";
import MobileMenu from "../../common/MobileMenu";
import PageTitle from "../../common/PageTitle";
import Button from "../../common/Button";
import Faq from "../../components/Faq";
import Newsletter from "../../components/Newsletter";
import { useLocation } from "react-router-dom";
import Footer from "../../common/Footer";

import {
  FaChartLine,
  FaUsers,
  FaRegLightbulb,
  FaNetworkWired,
  FaBullseye,
} from "react-icons/fa";
import { MdOutlineInsights, MdOutlineDataUsage } from "react-icons/md";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { IoAnalyticsOutline } from "react-icons/io5";

const Breadcrumb = (props) => {
  return (
    <>
      {/* =============================== Breadcrumb Start =========================== */}
      <section className="breadcrumb padding-y-120" style={{ zIndex: 1 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="breadcrumb__wrapper">
                <h2 className="breadcrumb__title"> {props.pageTitle}</h2>
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
        </div>
        <img
          src="/assets/images/thumbs/banner4.jpg"
          alt="Breadcrumb Image"
          className="breadcrumb__img"
        />
        <div className="breadcrumb__shadow"></div>
      </section>
      {/* =============================== Breadcrumb End =========================== */}
      <style>
        {`
          .breadcrumb {
            position: relative;
            text-align: center;
          }
          .breadcrumb__img {
            width: 100%;
            height: auto;
            position: absolute;
            z-index: -1;
            opacity: 0.5;
          }
          .breadcrumb__wrapper {
            position: relative;
            z-index: 3;
          }
          .breadcrumb__shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 2;
          }
        `}
      </style>
    </>
  );
};

const MarketResearch = () => {
  const services = [
    {
      icon: <FaChartLine className="service-icon" />,
      text: "Market Analysis",
    },
    {
      icon: <FaUsers className="service-icon" />,
      text: "Customer Insights",
    },
    {
      icon: <FaRegLightbulb className="service-icon" />,
      text: "Innovative Solutions",
    },
    {
      icon: <FaNetworkWired className="service-icon" />,
      text: "Network Analysis",
    },
    {
      icon: <FaBullseye className="service-icon" />,
      text: "Target Market Identification",
    },
    {
      icon: <MdOutlineInsights className="service-icon" />,
      text: "Business Insights",
    },
    {
      icon: <MdOutlineDataUsage className="service-icon" />,
      text: "Data Utilization",
    },
    {
      icon: <HiOutlineClipboardCheck className="service-icon" />,
      text: "Compliance Checks",
    },
    {
      icon: <IoAnalyticsOutline className="service-icon" />,
      text: "Advanced Analytics",
    },
  ];
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <PageTitle title="Grow And More - Market Research" />
      <OffCanvas />
      <MobileMenu />
      <main className="body-bg">
        <Header
          headerClass="dark-header has-border"
          logowhite={false}
          logoWhite={true}
          headerMenusClass="mx-auto"
          btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
          btnLink="/ListProperty"
          btnText="List Your Property"
          spanClass="icon-right text-gradient"
          showHeaderBtn={true}
          showOffCanvasBtn={false}
          offCanvasBtnClass=""
          showContactNumber={false}
        />

        <Breadcrumb pageTitle="Market Research" />

        <section className="about-two padding-y-60">
          <div className="container container-two">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-two__content">
                  <h4
                    style={{
                      textAlign: "left",
                      color: "black",
                    }}
                  >
                    Guided by experienced advisors, we provide specialized
                    expertise in surveying, valuation, and more. Committed to
                    precision and dependability, our services open doors to
                    opportunities in the ever-evolving real estate market."
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-two__thumb">
                  <img
                    src="/assets/images/thumbs/imageserv3.jpg"
                    alt=""
                    className="cover-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container container-two">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-two__thumb">
                  <img
                    src="/assets/images/thumbs/imageserv.jpg"
                    alt=""
                    className="cover-img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-two__content">
                  <h4
                    style={{
                      textAlign: "left",
                      color: "black",
                    }}
                  >
                    We use advanced analytics and innovative solutions to
                    provide you with the data and insights you need to stay
                    ahead of the competition.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <div className="market-research">
          <section className="service padding-t-120 padding-b-60">
            <div className="container container-two padding-b-120">
              <div style={{ textAlign: "center", paddingBottom: "20px" }}>
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
                  Market Research Services
                </h2>
                <p style={{ fontSize: "1.5em" }}>
                  Our comprehensive market research services help you understand
                  your market, identify opportunities, and make data-driven
                  decisions.
                </p>
              </div>
              <div className="row gy-4">
                {services.map((service, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                      <div className="service-item">
                        <span
                          className="service-item__icon"
                          style={{ fontSize: "2em", color: "white" }}
                        >
                          {service.icon}
                        </span>
                        <h6 className="service-item__title">{service.text}</h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <br />
          <Newsletter />
          {/* FAQ Section */}
          <Faq />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default MarketResearch;
