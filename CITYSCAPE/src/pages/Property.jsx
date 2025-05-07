import React, { useEffect } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import PropertyPageSection from "../components/PropertyPageSection";
import Cta from "../components/Cta";
import PageTitle from "../common/PageTitle";
import { useLocation } from "react-router-dom";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Footer from "../common/Footer";

const Property = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7616158179071093" crossorigin="anonymous"></script>
      <PageTitle title="Grow and More" />
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
        <Breadcrumb pageTitle="Property" pageName="Property" />

        {/* Property Page Section */}
        <PropertyPageSection />

        {/* FooterTwo */}
        <Footer/>
      </main>
    </>
  );
};

export default Property;
