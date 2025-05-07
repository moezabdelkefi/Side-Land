import React, { useEffect } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import ContactUsSection from "../components/ContactUsSection";
import ServiceSection from "../components/ServiceSection";
import PageTitle from "../common/PageTitle";
import { useLocation } from "react-router-dom";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Faq from "../components/Faq";

const Service = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <PageTitle title="Grow and More - Services" />
      <OffCanvas />
      <MobileMenu />
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
        <Breadcrumb pageTitle="Our Services" pageName="Services" />

        {/* Service Section */}
        <ServiceSection />
        <br />
        <Faq />
        {/* CTA */}
        {/* <ContactUsSection /> */}

        {/* Footer */}
        <Footer/>
      </main>
    </>
  );
};

export default Service;
