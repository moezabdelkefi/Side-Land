import React, { useState } from "react";
import {
  FaHome,
  FaChartLine,
  FaSignOutAlt,
  FaBuilding,
  FaBalanceScale,
} from "react-icons/fa";

const BannerTwo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const services = [
    { icon: <FaHome size={30} />, title: "Buying" },
    { icon: <FaChartLine size={30} />, title: "Investment Consultancy" },
    { icon: <FaSignOutAlt size={30} />, title: "Selling" },
    { icon: <FaBuilding size={30} />, title: "Property Management" },
    { icon: <FaBalanceScale size={30} />, title: "Legal Assistance" },
  ];

  return (
    <div className="black-background-wrapper">
      <div className="banner-container">
        {/* OUR SERVICES Header - Only appears above services on mobile */}
        <h1 className="mobile-services-title">OUR SERVICES</h1>

        {/* Content Row */}
        <div className="content-row">
          {/* Services Column */}
          <div className="services-column">
            {/* Desktop OUR SERVICES Header */}
            <h1 className="desktop-services-title">OUR SERVICES</h1>

            {/* Services grid */}
            <div className="services-grid">
              {/* First row with 3 services */}
              <div className="services-row services-row-three">
                {services.slice(0, 3).map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>

              {/* Second row with 2 services */}
              <div className="services-row services-row-two">
                {services.slice(3, 5).map((service, index) => (
                  <ServiceCard key={index + 3} service={service} />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Column */}
          <div className="form-column">
            {/* CLIENT TESTIMONIALS Header - Always stays with the form */}
            <h2 className="testimonials-title">CLIENT TESTIMONIALS</h2>

            <form onSubmit={handleSubmit} className="testimonial-form">
              <FormField
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <FormField
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <FormField
                label="Phone"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* CSS Styles */}
        <style jsx>{`
          .black-background-wrapper {
            background-color: #181616;
            padding: 40px 0;
            width: 100%;
          }

          .banner-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            font-family: "Arial, sans-serif";
            color: #fff;
          }

          .mobile-services-title {
            display: block;
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 20px 0;
            text-align: center;
            color: #fff;
          }

          @media (min-width: 992px) {
            .mobile-services-title {
              display: none;
            }
          }

          .desktop-services-title {
            display: none;
            color: #fff;
          }

          @media (min-width: 992px) {
            .desktop-services-title {
              display: block;
              font-size: 28px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0 0 30px 0;
              color: #fff;
            }
          }

          .testimonials-title {
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 20px 0;
            text-align: center;
            color: #fff;
          }

          @media (min-width: 992px) {
            .testimonials-title {
              font-size: 28px;
              text-align: left;
              margin-bottom: 30px;
            }
          }

          .content-row {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          @media (min-width: 992px) {
            .content-row {
              flex-direction: row;
              gap: 60px;
              align-items: flex-start;
            }
          }

          .services-column,
          .form-column {
            width: 100%;
          }

          @media (min-width: 992px) {
            .services-column {
              flex: 1;
            }
            .form-column {
              flex: 1;
            }
          }

          .services-grid {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .services-row {
            display: grid;
            gap: 20px;
          }

          .services-row-three {
            grid-template-columns: 1fr;
          }

          .services-row-two {
            grid-template-columns: 1fr;
          }

          @media (min-width: 576px) {
            .services-row-three {
              grid-template-columns: repeat(2, 1fr);
            }
            .services-row-two {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 768px) {
            .services-row-three {
              grid-template-columns: repeat(3, 1fr);
            }
            .services-row-two {
              grid-template-columns: repeat(2, 1fr);
              width: calc(66.66% + 20px);
              margin: 0 auto;
            }
          }

          @media (min-width: 992px) {
            .services-row-three {
              grid-template-columns: repeat(3, 1fr);
            }
            .services-row-two {
              grid-template-columns: repeat(2, 1fr);
              width: calc(66.66% + 20px);
            }
          }

          .testimonial-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .form-label {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
          }

          @media (min-width: 768px) {
            .form-label {
              font-size: 18px;
            }
          }

          .form-input,
          .form-textarea {
            padding: 12px;
            border: 1px solid #444;
            border-radius: 5px;
            font-size: 16px;
            width: 100%;
            background-color: #222;
            color: #fff;
          }

          @media (min-width: 768px) {
            .form-input,
            .form-textarea {
              padding: 15px;
            }
          }

          .form-textarea {
            resize: vertical;
            min-height: 120px;
          }

          .submit-button {
            font-family: system-ui, -apple-system, "Segoe UI", Roboto,
              "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial,
              sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol", "Noto Color Emoji";
            padding: 12px 24px;
            background-color: #c99200;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 10px;
            text-transform: uppercase;
            transition: background-color 0.3s ease;
            width: 100%;
          }

          @media (min-width: 768px) {
            .submit-button {
              padding: 15px 30px;
              width: auto;
            }
          }

          .submit-button:hover {
            background-color: #c99200;
          }
        `}</style>
      </div>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ service }) => (
  <div className="service-card">
    <div className="service-icon">{service.icon}</div>
    <div className="service-title">{service.title}</div>

    <style jsx>{`
      .service-card {
        padding: 20px;
        border: 1px solid #333;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
        transition: all 0.3s ease;
        background-color: #111;
      }

      @media (min-width: 768px) {
        .service-card {
          padding: 25px;
          gap: 15px;
        }
      }

      .service-card:hover {
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        transform: translateY(-5px);
      }

      .service-icon {
        color: #cba35e;
      }

      .service-title {
        font-family: "Vidaloka", serif;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
      }

      @media (min-width: 768px) {
        .service-title {
          font-size: 18px;
        }
      }
    `}</style>
  </div>
);

// Reusable Form Field Component
const FormField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="form-input"
      required={required}
    />
  </div>
);

export default BannerTwo;
