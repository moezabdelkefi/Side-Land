import React, { useEffect } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import BlogClassicSection from "../components/BlogClassicSection";
import PageTitle from "../common/PageTitle";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";

const BlogClassic = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7616158179071093" crossorigin="anonymous"></script>
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
      <Breadcrumb pageTitle="Blog Classic" pageName="Blog Classic" />

      <BlogClassicSection />

      {/* Cta */}
      <Cta ctaClass="" />

      {/* FooterTwo */}
      <Footer/>
    </>
  );
};

export default BlogClassic;
