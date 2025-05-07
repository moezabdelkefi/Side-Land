import React, { useEffect } from "react";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import FooterTwo from "../../common/FooterTwo";
import OffCanvas from "../../common/OffCanvas";
import MobileMenu from "../../common/MobileMenu";
import PageTitle from "../../common/PageTitle";
import "./PropertyManagementPackages.css";
import { useLocation } from "react-router-dom";
import Footer from "../../common/Footer";

const PropertyManagementPackages = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>
      <PageTitle title="Grow And More - Property Management Packages" />
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
        <Breadcrumb pageTitle="Property Management Packages" pageName="Property Management Packages" />

        {/* Property Management Content */}
        <div className="property-management">
          {/* Header Section */}
          <header className="header-section">
            <div className="header-overlay">
              <h1>Property Management Packages</h1>
              <p>
                We offer tailored property management services for both commercial and residential property owners, whether you own one unit or an entire building.
              </p>
            </div>
          </header>

          {/* Packages Table */}
          <section className="packages-section">
            <div className="container">
              <table className="packages-table">
                <thead>
                  <tr>
                    <th>List of Services</th>
                    <th>Silver</th>
                    <th>Gold</th>
                    <th>Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Leasing & Sales Services */}
                  <tr>
                    <td colSpan="4" className="section-header">
                      Leasing & Sales Services
                    </td>
                  </tr>
                  <tr>
                    <td>Show the property</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Moving In/Out Inspection</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Advise on Rent or Sale Value</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Filter Potential Tenants or Buyers</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>

                  {/* Property Management Services */}
                  <tr>
                    <td colSpan="4" className="section-header">
                      Property Management Services
                    </td>
                  </tr>
                  <tr>
                    <td>Payment Collection</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Corrective Maintenance</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Handle Maintenance Requests</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Planned Preventive Maintenance</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Prepare Frequent Financial Reports</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Manage Facilities & Service Contract & Contractors</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Move-in Preparation (Painting, Cleaning, Pest Control)</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Service Charges & Payments on behalf of the landlord</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Process and Supervise Maintenance Work and Completion</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>

                  {/* Administration Services */}
                  <tr>
                    <td colSpan="4" className="section-header">
                      Administration Services
                    </td>
                  </tr>
                  <tr>
                    <td>Ejari Registration</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Handle Deposit Refund</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Tenancy Contract Renewal</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Lease Contract Preparation</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Collect Required Documents</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Cheque Management</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Tenant & Landlord Self-Service Portal</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>

                  {/* Marketing */}
                  <tr>
                    <td colSpan="4" className="section-header">
                      Marketing
                    </td>
                  </tr>
                  <tr>
                    <td>Strategic Online Promotion</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Professional Marketing Materials</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Listing the Property on Portals (e.g. Dubizzle, Bayut, Property Finder, own website)</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>

                  {/* Legal */}
                  <tr>
                    <td colSpan="4" className="section-header">
                      Legal
                    </td>
                  </tr>
                  <tr>
                    <td>Dispute Resolution</td>
                    <td> </td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Advisory on Cases & Actions (Subject to Additional Fees for Silver)</td>
                    <td> </td>
                    <td> </td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Handle Legal Cases (Subject to Charge for Silver and Gold)</td>
                    <td> </td>
                    <td> </td>
                    <td>✔</td>
                  </tr>
                </tbody>
              </table>
              {/* Package Buttons */}
              <div className="package-buttons">
                <button className="package-btn silver">Choose This Plan</button>
                <button className="package-btn gold">Choose This Plan</button>
                <button className="package-btn platinum">Choose This Plan</button>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <Footer/>
        </div>
      </main>
    </>
  );
};

export default PropertyManagementPackages;
