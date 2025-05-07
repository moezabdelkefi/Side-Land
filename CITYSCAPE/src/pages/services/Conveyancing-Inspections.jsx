import React, { useEffect } from "react";
import Header from "../../common/Header";
import FooterTwo from "../../common/FooterTwo";
import OffCanvas from "../../common/OffCanvas";
import MobileMenu from "../../common/MobileMenu";
import PageTitle from "../../common/PageTitle";
import Button from "../../common/Button";
import Faq from "../../components/Faq";
import ContactUsSection from "../../components/ContactUsSection";
import SectionHeading from "../../common/SectionHeading";

// Import icons (using Material-UI Icons or FontAwesome as an example)
import {
  FaHandshake,
  FaRegBuilding,
  FaFileInvoiceDollar,
  FaGavel,
  FaUserTimes,
  FaRegAddressBook,
} from "react-icons/fa";
import {
  MdOutlineApproval,
  MdOutlineSupportAgent,
  MdOutlineAnalytics,
  MdPayments,
  MdOutlineAutoFixHigh,
} from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { AiOutlineAudit } from "react-icons/ai";
import Newsletter from "../../components/Newsletter";
import { useLocation } from "react-router-dom";
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
          src="/assets/images/thumbs/banner4.jpg"
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
            background: rgba(0, 0, 0, 0.3);
            z-index: 2;
          }
        `}
      </style>
    </>
  );
};

const Conveyancing_Inspections = () => {
  const services = [
    {
      icon: <FaHandshake />,
      text: "Handle consolidations, terminations, settlements, & de-registrations",
    },
    {
      icon: <FaRegBuilding />,
      text: "Manage strata/subdivision of units on interim real estate registry",
    },
    {
      icon: <FaFileInvoiceDollar />,
      text: "Register individual ownership & finance/mortgage charges on units",
    },
    {
      icon: <FaGavel />,
      text: "Negotiate consolidations under developer direction",
    },
    {
      icon: <FaUserTimes />,
      text: "Manage legal termination of non-performing contracts",
    },
    {
      icon: <FaRegAddressBook />,
      text: "Lodge title registrations & transfers",
    },
    {
      icon: <MdOutlineSupportAgent />,
      text: "Assist customer complaints to Dubai Land Department",
    },
    {
      icon: <MdOutlineAnalytics />,
      text: "Access DLD/RERA software platforms for developers",
    },
    {
      icon: <MdPayments />,
      text: "Pre-register properties & manage pre-sales",
    },
    {
      icon: <HiOutlineDocumentDuplicate />,
      text: "Contact buyers & provide final account statements",
    },
    {
      icon: <AiOutlineAudit />,
      text: "Handle stage-payments, service charges, & NOC collection",
    },
  ];
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <PageTitle title="Grow And More - Conveyancing & Inspections" />
      <OffCanvas />
      <MobileMenu />
      <main className="body-bg">
        <Header
          headerClass="dark-header has-border"
          logowhite={false}
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

        <Breadcrumb
          pageTitle="Conveyancing & Inspections"
          pageName="Conveyancing & Inspections"
        />
        <section className="about-two padding-y-60">
          <div className="container container-two">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-two__content">
                  <h4
                    style={{
                      textAlign: "left",
                      color: "black",
                    }}
                  >
                    We simplify the challenges of the real estate market by
                    offering reliable, transparent, and secure solutions,
                    ensuring smooth and hassle-free ownership transfers.
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-two__thumb">
                  <img
                    src="/assets/images/thumbs/imageserv3.jpg"
                    alt=""
                    className="cover-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container container-two">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-two__thumb">
                  <img
                    src="/assets/images/thumbs/imageserv.jpg"
                    alt=""
                    className="cover-img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-two__content">
                  <h4
                    style={{
                      textAlign: "left",
                      color: "black",
                    }}
                  >
                    Our services safeguard buyers, sellers, landlords, and
                    tenants by addressing legal ownership, contract validation,
                    deed registration, financial transparency, and ensuring
                    timely access to essential documents.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <div className="conveyancing-inspections">
          <section className="service padding-t-120 padding-b-60">
            <div className="container container-two padding-b-120">
              <div style={{ textAlign: "center", paddingBottom: "20px" }}>
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
                  Conveyancing & Inspections Services
                </h2>
                <p style={{ fontSize: "1.5em" }}>
                  We address the complexities of the real estate market by
                  providing transparent, secure, impartial, and guaranteed
                  solutions for seamless ownership transfers.
                </p>
              </div>
              <div className="row gy-4">
                {services.map((service, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                      <div className="service-item">
                        <span
                          className="service-item__icon"
                          style={{ fontSize: "2em", color: "white" }}
                        >
                          {service.icon}
                        </span>
                        <h6 className="service-item__title">{service.text}</h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <br />
          <Newsletter />
          <Faq />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Conveyancing_Inspections;
