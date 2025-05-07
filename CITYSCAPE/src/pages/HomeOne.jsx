import React, { useEffect, useState } from "react";
import TopHeader from "../common/TopHeader";
import Header from "./../common/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Property from "../components/Property";
import PropertyType from "../components/PropertyType";
import PropertyTypeThree from "./../components/PropertyTypeThree";
import AboutTwo from "../components/AboutTwo";
import PropertyPageSection from "../components/PropertyPageSection";
import AreasSection from "../components/AreasSection";
import SectionHeading from "../common/SectionHeading";
import VideoPopup from "../components/VideoPopup";
import Counter from "./../components/Counter";
import Portfolio from "../components/Portfolio";
import Testimonial from "./../components/Testimonial";
import Blog from "./../components/Blog";
import FooterTwo from "./../common/FooterTwo";
import Message from "./../components/Message";
import MobileMenu from "../common/MobileMenu";
import OffCanvas from "../common/OffCanvas";
import BannerTwo from "../components/BannerTwo";
import PropertyTwo from "../components/PropertyTwo";
import Service from "../components/Service";
import FloorPlan from "../components/FloorPlan";
import { useLocation } from "react-router-dom";
import PartnersSlider from "../components/PartnersSlider";
import Button from "../common/Button";
import Footer from "../common/Footer";

const HomeOne = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [location]);

  return (
    <>
      <OffCanvas />
      <MobileMenu />
      <main className="body-bg">
        {/* Top header */}
        {/* <TopHeader /> */}
        {/* Header */}
        <Header
          headerClass=""
          logoBlack={true}
          logoWhite={false}
          headerMenusClass=""
          btnClass="btn btn-outline-light d-lg-block d-none"
          btnLink={isLoggedIn ? "/ListProperty" : "/ListProperty"}
          btnText={isLoggedIn ? "List Your Property" : "List Your Property"}
          spanClass="icon-right text-gradient"
          showHeaderBtn={true}
          showOffCanvasBtn={true}
          offCanvasBtnClass=""
          showContactNumber={false}
        />
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7616158179071093" crossOrigin="anonymous"></script>
        <VideoPopup />
        <PropertyTypeThree />
        <PartnersSlider />
        <AboutTwo />
        <BannerTwo />
        <Property />
        <AreasSection maxItems={3} />
        <Banner />
        <Blog />
        <Footer />
      </main>
    </>
  );
};

export default HomeOne;
