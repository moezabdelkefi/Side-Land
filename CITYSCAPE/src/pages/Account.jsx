import React, { useEffect } from "react";
import Header from "../common/Header";
import FooterTwo from "../common/FooterTwo";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import AccountSection from "../components/AccountSection";
import PageTitle from "../common/PageTitle";
import { useLocation } from "react-router-dom";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Footer from "../common/Footer";

const Account = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <OffCanvas />
      <MobileMenu />
      <PageTitle title="Grow And More - Account Page" />

      <main className="body-bg">
        {/* Header */}
        <Header
          headerClass="dark-header has-border"
          logoBlack={false}
          logoWhite={true}
          headerMenusClass="mx-auto"
          btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
          btnLink="/"
          btnText="Home"
          spanClass="icon-right text-gradient"
          showHeaderBtn={true}
          showOffCanvasBtn={false}
          offCanvasBtnClass=""
          showContactNumber={false}
        />

        {/* BreadCrumb */}
        <Breadcrumb pageTitle="Account" pageName="Account" />

        {/* Account Section */}
        <AccountSection />

        {/* FooterTwo */}
        <Footer/>
      </main>
    </>
  );
};

export default Account;
