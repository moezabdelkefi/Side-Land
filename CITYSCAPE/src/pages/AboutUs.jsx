import React, { useEffect } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import AboutThree from "../components/AboutThree";
import PropertyTypeThree from "../components/PropertyTypeThree";
import Team from "../components/Team";
import PageTitle from "../common/PageTitle";
import { useLocation } from "react-router-dom";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import PartnersSlider from "../components/PartnersSlider";
import FaqTwo from "../components/FaqTwo";
import FaqContactUs from "../components/FaqContactUs";
import Footer from "../common/Footer";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <PageTitle title="Grow and More" />
      <OffCanvas />
      <MobileMenu />
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

      {/* BreadCrumb */}
      <Breadcrumb pageTitle="About Us" pageName="About Us" />

      <AboutThree />
      <PartnersSlider />

      {/* <Team /> */}

      <PropertyTypeThree />
      <FaqTwo />
      <FaqContactUs />
      {/* FooterTwo */}
      <Footer/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7616158179071093" crossorigin="anonymous"></script>
    </>
  );
};

export default AboutUs;
