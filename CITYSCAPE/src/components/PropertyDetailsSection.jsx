import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import CommonSidebar from "../common/CommonSidebar";
import {
  FaBed,
  FaBath,
  FaCar,
  FaHome,
  FaBuilding,
  FaCouch,
  FaCalendarAlt,
  FaUserTie,
  FaTag,
  FaDollarSign,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTools,
  FaHandHoldingUsd,
  FaCalendarCheck,
} from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Logo from "../common/Logo";

const PropertyDetailsSection = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties/${id}`
        );
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Error fetching property details");
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  useEffect(() => {
    const initializeMap = async (location) => {
      let lat, lng;
      if (location.includes(",")) {
        [lat, lng] = location.split(",").map(Number);
      } else {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
        );
        if (response.data.length > 0) {
          lat = parseFloat(response.data[0].lat);
          lng = parseFloat(response.data[0].lon);
        } else {
          console.error("Invalid location format");
          return;
        }
      }

      if (!isNaN(lat) && !isNaN(lng)) {
        const map = L.map(mapRef.current).setView([lat, lng], 13);
        mapInstance.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const customIcon = L.icon({
          iconUrl: markerIcon,
          shadowUrl: markerShadow,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        const marker = L.marker([lat, lng], { icon: customIcon, draggable: false }).addTo(map);
        markerRef.current = marker;
      } else {
        console.error("Invalid location format");
      }
    };

    if (property && mapRef.current && !mapInstance.current) {
      initializeMap(property.location);
    }
  }, [property]);

  if (loading) {
    return (
      <div className="loading-logo-container">
        <Logo />
        <style>
          {`
            .loading-logo-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .loading-logo-container svg {
              animation: spin 2s linear infinite;
            }
          `}
        </style>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!property) {
    return <div>No property details available</div>;
  }

  const propertyDetailsAmenities = [
    property.bedrooms && {
      icon: <FaBed style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }} />,
      text: "Room",
    },
    property.bathrooms && {
      icon: <FaBath style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }} />,
      text: "Bath",
    },
    property.size && {
      icon: <FaHome style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }} />,
      text: "Size",
    },
    property.type && {
      icon: (
        <FaBuilding style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }} />
      ),
      text: "Property Type",
    },
    property.handoverDate && {
      icon: (
        <FaCalendarAlt
          style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }}
        />
      ),
      text: "Handover",
    },
    property.developer && {
      icon: (
        <FaUserTie style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }} />
      ),
      text: "Developer",
    },
    property.status && {
      icon: <FaTag style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }} />,
      text: "Property Status",
    },
    property.price && {
      icon: (
        <FaDollarSign
          style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }}
        />
      ),
      text: "Price",
    },
    property.totalUnits && {
      icon: <FaHome style={{ fontSize: "24px", color: "rgb(218, 165, 32)" }} />,
      text: "Total Units",
    },
  ].filter(Boolean);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const updatedAmenities = propertyDetailsAmenities.map((amenity) => {
    let title;
    switch (amenity.text.toLowerCase()) {
      case "room":
        title = `${property.bedrooms}`;
        break;

      case "bath":
        title = `${property.bathrooms} Baths`;
        break;
      case "size":
        title = property.size ? `${property.size} sqft` : "";
        break;
      case "property type":
        title = property.type;
        break;
      case "handover":
        title = new Date(property.handoverDate).toLocaleDateString();
        break;
      case "developer":
        title = property.developer;
        break;
      case "property status":
        title = property.status;
        break;
      case "price":
        title = `AED${property.price.toLocaleString()}`;
        break;
      case "total units":
        title = `${property.totalUnits} Units`;
        break;
      default:
        title = amenity.text;
    }
    return { ...amenity, title };
  });

  return (
    <>
      <style>
        {`
          .map-container {
            position: relative;
            z-index: 0;
          }

          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
          }

          .address-map {
            z-index: 1;
          }

          .contact-info {
            display: flex;
            gap: 16px;
            align-items: center;
            flex-wrap: wrap;
          }

          .contact-info p {
            margin: 0;
            display: flex;
            align-items: center;
          }

          .contact-info p span {
            margin-left: 8px;
          }

          @media (max-width: 768px) {
            .contact-info {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>
      <section className="property-details padding-y-120">
        <div className="container container-two">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="property-details__thumb">
                {property.images.length > 1 ? (
                  <Slider {...sliderSettings}>
                    {property.images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={`${
                            import.meta.env.VITE_REACT_APP_API_BASE_URL
                          }/${image}`}
                          alt={`Property Image ${index + 1}`}
                          className="cover-img"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/${
                        property.images[0]
                      }`}
                      alt="Property Image"
                      className="cover-img"
                    />
                  </div>
                )}
              </div>
              <h3 className="property-details__title mt-lg-5 mb-4">
                {property.title}
              </h3>
              <p
                className="property-details__desc mb-3"
                dangerouslySetInnerHTML={{
                  __html: property.description.replace(/\n/g, "<br />"),
                }}
              ></p>
              <div className="property-details-wrapper">
                <div className="property-details-item">
                  <h6 className="property-details-item__title">Preview</h6>
                  <div className="property-details-item__content">
                    <div className="row gy-4 gy-lg-5">
                      {updatedAmenities.map((amenity, amenityIndex) => (
                        <div className="col-sm-4 col-6" key={amenityIndex}>
                          <div className="amenities-content d-flex align-items-center">
                            <span className="amenities-content__icon">
                              {amenity.icon}
                            </span>
                            <div className="amenities-content__inner">
                              <span className="amenities-content__text">
                                {amenity.text}
                              </span>
                              <h6 className="amenities-content__title mb-0 font-16">
                                {amenity.title}
                              </h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="property-details-item">
                  <h6 className="property-details-item__title">Features</h6>
                  <div className="property-details-item__content">
                    <div className="row gy-2">
                      <div className="col-sm-6">
                        <ul className="check-list">
                          {property.amenities.map(
                            (amenity, index) =>
                              index % 2 === 0 && (
                                <li
                                  className="check-list__item d-flex align-items-center"
                                  key={index}
                                >
                                  <span className="icon">
                                    <i className="fas fa-check"></i>
                                  </span>
                                  <span className="text">{amenity}</span>
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="check-list">
                          {property.amenities.map(
                            (amenity, index) =>
                              index % 2 !== 0 && (
                                <li
                                  className="check-list__item d-flex align-items-center"
                                  key={index}
                                >
                                  <span className="icon">
                                    <i className="fas fa-check"></i>
                                  </span>
                                  <span className="text">{amenity}</span>
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-item">
                  <h6 className="property-details-item__title">Location</h6>
                  <div className="property-details-item__content">
                    <div className="row gy-4">
                      <div className="col-6">
                        <div className="address-content d-flex gap-4 align-items-center">
                          <span className="address-content__text font-18">
                            Address
                          </span>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              property.location
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h6 className="address-content__title font-15 mb-0">
                              {property.location}
                            </h6>
                          </a>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="address-content d-flex gap-4 align-items-center">
                          <span className="address-content__text font-18">
                            City
                          </span>
                          <h6 className="address-content__title font-15 mb-0">
                            {property.city}
                          </h6>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="address-content d-flex gap-4 align-items-center">
                          <span className="address-content__text font-18">
                            Country
                          </span>
                          <h6 className="address-content__title font-15 mb-0">
                            {property.country}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      ref={mapRef}
                      className="address-map"
                      style={{ height: "400px", width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="property-details-item">
                  <h6 className="property-details-item__title">
                    Payment Schedule
                  </h6>
                  <div className="property-details-item__content">
                    <div className="row gy-4 gy-lg-5">
                      <div className="col-sm-4 col-6">
                        <div className="amenities-content d-flex align-items-center">
                          <span className="amenities-content__icon">
                            <FaTools
                              style={{
                                fontSize: "24px",
                                color: "rgb(218, 165, 32)",
                              }}
                            />
                          </span>
                          <div className="amenities-content__inner">
                            <span className="amenities-content__text">
                              Under Construction
                            </span>
                            <h6 className="amenities-content__title mb-0 font-16">
                              {property.underConstruction} %
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="amenities-content d-flex align-items-center">
                          <span className="amenities-content__icon">
                            <FaHandHoldingUsd
                              style={{
                                fontSize: "24px",
                                color: "rgb(218, 165, 32)",
                              }}
                            />
                          </span>
                          <div className="amenities-content__inner">
                            <span className="amenities-content__text">
                              On Handover
                            </span>
                            <h6 className="amenities-content__title mb-0 font-16">
                              {property.onHandover} %
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="amenities-content d-flex align-items-center">
                          <span className="amenities-content__icon">
                            <FaCalendarCheck
                              style={{
                                fontSize: "24px",
                                color: "rgb(218, 165, 32)",
                              }}
                            />
                          </span>
                          <div className="amenities-content__inner">
                            <span className="amenities-content__text">
                              Post Handover
                            </span>
                            <h6 className="amenities-content__title mb-0 font-16">
                              {property.postHandover}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-item">
                  <h6 className="property-details-item__title">
                    Contact Information
                  </h6>
                  <div className="property-details-item__content contact-info">
                    <p>
                      <FaUser
                        style={{ fontSize: "22px", color: "rgb(218, 165, 32)" }}
                      />
                      <span>{property.contactName}</span>
                    </p>
                    <p>
                      <FaEnvelope
                        style={{ fontSize: "22px", color: "rgb(218, 165, 32)" }}
                      />
                      <span>
                        <a
                          href={`mailto:${property.contactEmail}`}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {property.contactEmail}
                        </a>
                      </span>
                    </p>
                    <p>
                      <FaPhone
                        style={{ fontSize: "22px", color: "rgb(218, 165, 32)" }}
                      />
                      <span>
                        <a
                          href={`tel:${property.contactPhone}`}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {property.contactPhone}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <CommonSidebar
                renderSearch={false}
                renderProperties={true}
                renderTags={false}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailsSection;