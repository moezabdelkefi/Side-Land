import React, { useEffect } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import BreadcrumbImage from "/assets/images/thumbs/banner.jpg";
import Button from "../common/Button";
import Cta from "../components/Cta";
import ContactTop from "../components/ContactTop";
import ContactForListing from "../components/ContactForListing";
import PageTitle from "../common/PageTitle";
import { useLocation } from "react-router-dom";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Aboutservicelist from "../components/Aboutservicelist";
import Footer from "../common/Footer";

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
          src="/assets/images/thumbs/banner1.jpg"
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

const ListProperty = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <PageTitle title="Grow and More List Property" />
      <OffCanvas />
      <MobileMenu />
      <main className="body-bg">
        {/* Header */}
        <Header
          headerClass=""
          logoBlack={true}
          logoWhite={false}
          headerMenusClass=""
          btnClass="btn btn-outline-light d-lg-block d-none"
          btnLink="/ListProperty"
          btnText="List Your Property"
          spanClass="icon-right text-gradient"
          showHeaderBtn={true}
          showOffCanvasBtn={true}
          offCanvasBtnClass=""
          showContactNumber={false}
        />

        {/* Breadcrumb */}
        <Breadcrumb pageTitle="List Your Property" />

        {/* Cta */}
        {/* <Cta /> */}
        {/* Contact Us Section */}
        <Aboutservicelist />
        <br />
        <br />
        <div className="container">
          <img
            src="/assets/images/thumbs/listing.jpg"
            alt="Grow and more list your property"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContactForListing />
        {/* Contact Top */}
        <ContactTop />
        {/* google map */}
        <div className="contact-map address-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3609.1000183593183!2d55.3042057!3d25.233556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42cc28ba49af%3A0x57bbd7cd1311987e!2sSultan%20Business%20Centre!5e0!3m2!1sen!2sfr!4v1736381781526!5m2!1sen!2sfr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default ListProperty;