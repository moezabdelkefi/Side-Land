import React, { useEffect } from "react";
import Header from "../common/Header";
import FooterTwo from "./../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import ContactTop from "../components/ContactTop";
import ContactUsSection from "../components/ContactUsSection";
import PageTitle from "../common/PageTitle";
import { useLocation } from "react-router-dom";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Footer from "../common/Footer";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7616158179071093" crossOrigin="anonymous"></script>
      <PageTitle title="Grow and More Contact-Us" />
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

        {/* BreadCrumb */}
        <Breadcrumb pageTitle="Contact Us" pageName="Contact Us" />


        {/* Cta */}
        {/* <Cta /> */}
        {/* Contact Us Section */}
        <ContactUsSection />
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
        <Footer/>
      </main>
    </>
  );
};

export default Contact;
