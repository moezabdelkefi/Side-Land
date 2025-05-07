import React, { useEffect } from "react";
import Header from "../../common/Header";
import FooterTwo from "../../common/FooterTwo";
import OffCanvas from "../../common/OffCanvas";
import MobileMenu from "../../common/MobileMenu";
import PageTitle from "../../common/PageTitle";
import Button from "../../common/Button";
import {
  services,
  services2,
  services3,
  services4,
} from "../../data/HomeTwoData/HomeTwoData";
import { useLocation } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import Faq from "../../components/Faq";
import Footer from "../../common/Footer";
import Gallery from "../../components/Gallery";

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
          src="/assets/images/thumbs/banner3.jpg"
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
            background: rgba(0, 0, 0, 0.2);
            z-index: 2;
          }
        `}
      </style>
    </>
  );
};

const PropertyManagement = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <PageTitle title="Grow And More - Property Management" />
      <OffCanvas />
      <MobileMenu />
      <main className="body-bg">
        {/* Header */}
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

        {/* Breadcrumb */}
        <Breadcrumb
          pageTitle="Property Management"
          pageName="Property Management"
        />

        {/* Property Management Content */}
        <div className="property-management">
          <section className="service padding-t-120 padding-b-60">
            <div className="container container-two">
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
                  What Sets Us Apart
                </h2>
              </div>
              <div className="row gy-4">
                {services.map((service, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                      <div className="service-item">
                        <span
                          className="service-item__icon"
                          style={{ fontSize: "2em", color: "#C99200" }}
                        >
                          <i className={service.icon}></i>
                        </span>
                        <h6 className="service-item__title">{service.title}</h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <Gallery />
          <section className="service padding-t-120 padding-b-60">
            <div className="container container-two">
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
                  Through Reporting and Accountability
                </h2>
              </div>
              <div
                className="row gy-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {services2.map((service2, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                      <div className="service-item">
                        <span
                          className="service-item__icon"
                          style={{ fontSize: "2em", color: "#C99200" }}
                        >
                          <i className={service2.icon}></i>
                        </span>
                        <h6 className="service-item__title">
                          {service2.title}
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="service padding-t-120 padding-b-60">
            <div className="container container-two">
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
                  Why Choose Roots Land Real Estate for Your Property
                  Management?
                </h2>
                <p style={{ fontSize: "1.5em" }}>
                  We offer tailored property management services for both
                  commercial and residential property owners, whether you own
                  one unit or an entire building.
                </p>
              </div>
              <div className="row gy-4">
                {services3.map((service3, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                      <div className="service-item">
                        <span
                          className="service-item__icon"
                          style={{ fontSize: "2em", color: "#C99200" }}
                        >
                          <i className={service3.icon}></i>
                        </span>
                        <h6 className="service-item__title">
                          {service3.title}
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="service padding-t-120 padding-b-60">
            <div className="container container-two">
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
                  Property Management Packages
                </h2>
              </div>
              <div className="row gy-4">
                {services4.map((service4, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                      <div className="service-item">
                        <span
                          className="service-item__icon"
                          style={{ fontSize: "2em", color: "#C99200" }}
                        >
                          <i className={service4.icon}></i>
                        </span>
                        <h6 className="service-item__title">
                          {service4.title}
                        </h6>
                        <div
                          className="service-item__text"
                          style={{ color: "black", textAlign: "left" }}
                        >
                          {service4.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="about-two__button" style={{ textAlign: "center" }}>
              <Button
                btnLink="/services/Packages"
                btnClass="btn-main"
                btnText="Compare Packages"
                spanClass="icon-right icon"
                iconClass="fas fa-arrow-right"
              />
            </div>
          </section>
        </div>
        <Newsletter />
        <Faq />
        <Footer />
      </main>
    </>
  );
};

export default PropertyManagement;
