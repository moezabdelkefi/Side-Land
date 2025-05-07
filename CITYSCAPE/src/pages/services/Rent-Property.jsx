import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SectionHeading from "../../common/SectionHeading";
import ContactUsSection from "../../components/ContactUsSection";
import FaqTwo from "../../components/FaqTwo";
import Property from "../../components/Property";
import PageTitle from "../../common/PageTitle";
import Header from "../../common/Header";
import BreadcrumbImage from "/assets/images/thumbs/banner1.jpg";
import Button from "../../common/Button";
import Faq from "../../components/Faq";
import FooterTwo from "../../common/FooterTwo";
import AboutserviceRent from "../../components/AboutserviceRent";
import OffCanvas from "../../common/OffCanvas";
import MobileMenu from "../../common/MobileMenu";
import Footer from "../../common/Footer";

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
          src="/assets/images/thumbs/banner2.jpg"
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
            background: rgba(0, 0, 0, 0.2); /* Adjust the shadow color and opacity */
            z-index: 2;
          }
        `}
      </style>
    </>
  );
};

const RentProperty = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <OffCanvas />
      <MobileMenu />
      <PageTitle title="Grow And More Rent Property" />
      <main className="body-bg">
        {/* Header */}
        <Header
          headerClass="dark-header has-border"
          logoBlack={false}
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
        <Breadcrumb pageTitle="Rent Property" />

        <section className="buy-property-page padding-y-120">
          <div className="container container-two">
            <div style={{ textAlign: "center" }}>
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
                Rent Properties
              </h2>
              <h4
                style={{
                  textAlign: "center",
                  color: "black",
                  paddingBottom: "20px",
                }}
              >
                At Grow And More Real Estate, we specialize in guiding you
                through every step of your property purchase journey in Dubai.
                Our commitment is to make your renting experience both
                pleasurable and trouble-free.
              </h4>
            </div>
            <AboutserviceRent />

            <br />
          </div>
          <Property status="For Rent" />
          <FaqTwo />
          <ContactUsSection />
        </section>
        <style>
          {`
            .buy-property-page {
              padding: 60px 0;
            }
          `}
        </style>
        <Footer />
      </main>
    </>
  );
};

export default RentProperty;