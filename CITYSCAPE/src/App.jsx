import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "yet-another-react-lightbox/styles.css"; // Update to use the new lightbox library
import "./App.css";

import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import HomeSix from "./pages/HomeSix";
import HomeSeven from "./pages/HomeSeven";
import ScrollToTop from "./common/ScrollToTop";
import Property from "./pages/Property";
import PropertySidebar from "./pages/PropertySidebar";
import PropertyDetails from "./pages/PropertyDetails";
import AddListing from "./pages/AddListing";
import MapLocation from "./pages/MapLocation";
import AboutUs from "./pages/AboutUs";
import FaqPage from "./pages/FaqPage";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import BlogClassic from "./pages/BlogClassic";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Areas from "./pages/Areas";
import AreasDetails from "./pages/AreasDetails";
import PropertyList from "./pages/PropertyList";
import Service from "./pages/Service";
import ListProperty from "./pages/ListProperty";
import OffPlan from "./pages/OffPlan";
import BuyProperty from "./pages/services/Buy-Property";
import RentProperty from "./pages/services/Rent-Property";
import PropertyManagement from "./pages/services/PropertyManagement";
import PropertyManagementPackages from "./pages/services/Packages";
import Conveyancing_Inspections from "./pages/services/Conveyancing-Inspections";
import MarketResearch from "./pages/services/Market-Research";
import FilteredProperties from "./pages/FilteredProperties";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  // useEffect(() => {
  //   localStorage.removeItem("token");
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/home-four" element={<HomeFour />} />
          <Route path="/home-five" element={<HomeFive />} />
          <Route path="/home-six" element={<HomeSix />} />
          <Route path="/home-seven" element={<HomeSeven />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property-sidebar" element={<PropertySidebar />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/add-new-listing" element={<AddListing />} />
          <Route path="/map-location" element={<MapLocation />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/project" element={<Project />} />
          <Route path="/areas/:name" element={<AreasDetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/blog" element={<BlogClassic />} />
          <Route path="/blog/:title" element={<BlogDetails />} />
          <Route path="/ListProperty" element={<ListProperty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/property-list" element={<PropertyList />} />
          <Route path="/property-list/:type" element={<PropertyList />} />
          <Route path="/property-buy" element={<Property />} />
          <Route path="/property-rent" element={<Property />} />
          <Route path="/OffPlan" element={<OffPlan />} />
          <Route path="/services/Buy-Property" element={<BuyProperty />} />
          <Route path="/services/Rent-Property" element={<RentProperty />} />
          <Route path="/filtered-properties" component={FilteredProperties} />

          <Route
            path="/services/PropertyManagement"
            element={<PropertyManagement />}
          />
          <Route
            path="/services/Packages"
            element={<PropertyManagementPackages />}
          />
          <Route
            path="/services/Conveyancing-Inspections"
            element={<Conveyancing_Inspections />}
          />
          <Route
            path="/services/Market-Research"
            element={<MarketResearch />}
          />
        </Routes>
      </BrowserRouter>
      <FloatingWhatsApp
        phoneNumber="1234567890"
        accountName="Grow And More Realty"
        avatar="/assets/images/logo/logoo.png"
        statusMessage="Your trusted real estate partner"
        chatMessage="Hello! 👋 How can we assist you in finding your dream property today?"
        placeholder="Type your message here..."
        allowClickAway={true}
        notification={true}
        notificationSound={true}
        notificationDelay={30000}
        styles={{ zIndex: 1000 }}
      />
    </>
  );
}

export default App;
