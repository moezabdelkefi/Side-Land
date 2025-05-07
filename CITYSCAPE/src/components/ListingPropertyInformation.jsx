import React, { useState, useEffect, useRef } from "react";
import { addAmenities } from "../data/OthersPageData/OthersPageData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const ListingPropertyInformation = ({
  formData,
  handleInputChange,
  handleCheckboxChange,
  reset,
}) => {
  const [handoverDate, setHandoverDate] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [position, setPosition] = useState([25.276987, 55.296249]);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (reset) {
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
      setHandoverDate(null);
    } else {
      setHandoverDate(formData.handoverDate);
    }
  }, [reset, formData.handoverDate]);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      const map = L.map(mapRef.current).setView(position, 13);
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

      const marker = L.marker(position, { icon: customIcon, draggable: true }).addTo(map);
      markerRef.current = marker;

      marker.on("dragend", (event) => {
        const newPosition = event.target.getLatLng();
        setPosition([newPosition.lat, newPosition.lng]);
        handleInputChange({
          target: {
            name: "location",
            value: `${newPosition.lat}, ${newPosition.lng}`,
          },
        });
      });

      map.on("click", (event) => {
        const newPosition = event.latlng;
        setPosition([newPosition.lat, newPosition.lng]);
        marker.setLatLng(newPosition);
        handleInputChange({
          target: {
            name: "location",
            value: `${newPosition.lat}, ${newPosition.lng}`,
          },
        });
      });
    }
  }, [mapRef.current]);

  useEffect(() => {
    const updateMapPosition = async (location) => {
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
        const newPosition = [lat, lng];
        setPosition(newPosition);
        mapInstance.current.setView(newPosition, 13);
        markerRef.current.setLatLng(newPosition);
      }
    };

    if (formData.location && mapInstance.current) {
      updateMapPosition(formData.location);
    }
  }, [formData.location]);

  const handleDateChange = (date) => {
    setHandoverDate(date);
    handleInputChange({ target: { name: "handoverDate", value: date } });
  };

  const handleLocationChange = async (e) => {
    const { name, value } = e.target;
    handleInputChange(e);

    if (name === "location" && value) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          const newPosition = [parseFloat(lat), parseFloat(lon)];
          setPosition(newPosition);
          mapInstance.current.setView(newPosition, 13);
          markerRef.current.setLatLng(newPosition);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }
  };

  const inputIconStyle = {
    position: "absolute",
    left: "0.45rem",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  };

  return (
    <>
      <style>
        {`
          .map-container {
            position: relative;
            z-index: 0;
            height: 300px; /* Ensure the height is set */
            width: 100%; /* Ensure the width is set */
            margin-top: 10px;
          }

          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000; /* Ensure the navbar has a higher z-index than the map */
          }
        `}
      </style>
      <div className="card-item" id="propertyInformation">
        <div className="card common-card">
          <div className="card-header">
            <h6 className="title mb-0">Details Information</h6>
          </div>
          <div className="card-body">
            <div className="row gy-4">
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="Location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="common-input"
                  id="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleLocationChange}
                  placeholder="Location"
                />
              </div>
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="City" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="common-input"
                  id="City"
                  name="city"
                  value={formData.city || "Dubai"}
                  onChange={handleInputChange}
                  placeholder="City"
                />
              </div>
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="Country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="common-input"
                  id="Country"
                  name="country"
                  value={formData.country || "United Arab Emirates"}
                  onChange={handleInputChange}
                  placeholder="Country"
                />
              </div>
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="Area" className="form-label">
                  Area (optional)
                </label>
                <input
                  type="text"
                  className="common-input"
                  id="Area"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  placeholder="Area"
                />
              </div>
              <div
                ref={mapRef}
                className="map-container col-xl-3 col-sm-6 col-xs-6"
              ></div>
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="Bathrooms" className="form-label">
                  Bathrooms
                </label>
                <input
                  type="number"
                  className="common-input"
                  id="Bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  placeholder="Bathrooms"
                />
              </div>
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="TotalFloors" className="form-label">
                  Total Floors (optional)
                </label>
                <input
                  type="number"
                  className="common-input"
                  id="TotalFloors"
                  name="totalFloors"
                  value={formData.totalFloors}
                  onChange={handleInputChange}
                  placeholder="Total Floors"
                />
              </div>
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="Handover" className="form-label">
                  Handover (optional)
                </label>
                <div className="position-relative">
                  <DatePicker
                    selected={handoverDate}
                    onChange={handleDateChange}
                    className="common-input"
                    placeholderText="Select Date"
                    id="Handover"
                    name="handoverDate"
                    dateFormat="MMMM d, yyyy"
                    showPopperArrow={false}
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={100}
                    showMonthDropdown
                  />
                  <span
                    className="input-icon input-icon--left"
                    style={inputIconStyle}
                  >
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-xs-6">
                <label htmlFor="Developer" className="form-label">
                  Developer (optional)
                </label>
                <input
                  type="text"
                  className="common-input"
                  id="Developer"
                  name="developer"
                  value={formData.developer}
                  onChange={handleInputChange}
                  placeholder="Developer"
                />
              </div>
              <div className="col-12">
                <h6 className="checkboxes__title mt-4 fw-500 font-18">
                  Bedrooms
                </h6>
                <div className="row gy-3 checkboxes">
                  {[
                    "Studio",
                    "1 Bedroom",
                    "2 Bedrooms",
                    "3 Bedrooms",
                    "4 Bedrooms",
                    "5 Bedrooms",
                  ].map((option, index) => (
                    <div className="col-md-4 col-sm-6 col-xs-6" key={index}>
                      <div className="common-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`bedrooms-${option}`}
                          name="bedrooms"
                          value={option}
                          checked={formData.bedrooms.includes(option)}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`bedrooms-${option}`}
                        >
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12">
                <h6 className="checkboxes__title mt-4 fw-500 font-18">
                  Amenities
                </h6>
                <div className="row gy-3 checkboxes">
                  {addAmenities.map((amenity, index) => (
                    <div className="col-md-4 col-sm-6 col-xs-6" key={index}>
                      <div className="common-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={amenity.text}
                          name="amenities"
                          value={amenity.text}
                          onChange={handleCheckboxChange}
                          checked={formData.amenities.includes(amenity.text)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={amenity.text}
                        >
                          {amenity.text}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPropertyInformation;