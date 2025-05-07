import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../../common/SectionHeading";
import ContactUsSection from "../../components/ContactUsSection";
import FaqTwo from "../../components/FaqTwo";
import Property from "../../components/Property";
import PageTitle from "../../common/PageTitle";
import Header from "../../common/Header";
import Faq from "../../components/Faq";
import FooterTwo from "../../common/FooterTwo";
import Aboutservicebuy from "../../components/Aboutservicebuy";
import OffCanvas from "../../common/OffCanvas";
import MobileMenu from "../../common/MobileMenu";
import BreadcrumbImage from "/assets/images/thumbs/banner.jpg";
import Button from "../../common/Button";
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
          src={BreadcrumbImage}
          alt="Breadcrumb Image"
          className="breadcrumb__img"
        />
      </section>
      {/* =============================== Breadcrumb End =========================== */}
    </>
  );
};

const BuyProperty = () => {
  return (
    <>
      <OffCanvas />
      <MobileMenu />
      <PageTitle title="Grow And More Buy Property" />
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
          style={{ zIndex: 2 }}
        />

        {/* BreadCrumb */}
        <Breadcrumb pageTitle="Buy Property" />
        <section className="buy-property-page padding-y-120">
          <div className="">
            <SectionHeading
              headingClass=""
              subtitleClass="bg-gray-100"
              title="Buy Properties"
              renderDesc={true}
              desc="At Grow And More Real Estate, we specialize in guiding you through every step of your property purchase journey in Dubai. Our commitment is to make your buying experience both pleasurable and trouble-free."
              renderButton={false}
              buttonClass="btn-main"
              buttonText="View More"
            />
            <Aboutservicebuy />

            <br />
            <Property status="For Sale" />
            <FaqTwo />
            <ContactUsSection />
          </div>
        </section>
        <style>
          {`
            .buy-property-page {
              padding: 60px 0;
            }
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
            .breadcrumb__list {
              position: relative;
              z-index: 3;
            }
          `}
        </style>
        <Footer/>
      </main>
    </>
  );
};

export default BuyProperty;
