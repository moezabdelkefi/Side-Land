import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PropertyFilterContext } from "../../contextApi/PropertyFilterContext";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaBuilding,
  FaPhoneAlt,
  FaUser,
  FaShareAlt,
  FaEnvelope,
} from "react-icons/fa"; // Import icons

const PropertyItem = ({
  property,
  itemClass,
  iconsClass,
  btnClass,
  badgeText,
  badgeClass,
  btnRenderBottom,
  btnRenderRight,
}) => {
  const {
    images,
    price,
    title,
    desc,
    location,
    amenities,
    btnText,
    dataSort,
    dataStatuses,
    dataTypes,
    dataLocations,
    bedrooms,
    bathrooms,
    size, // Ensure size is included in the property data
    type, // Ensure type is included in the property data
    contactName,
    contactPhone, // Ensure contact details are included in the property data
    contactEmail, // Ensure contact email is included in the property data
  } = property;

  const propertyURL = `/property/${property._id}`;
  const whatsappURL = `https://wa.me/${contactPhone}`;
  const emailURL = `mailto:${contactEmail}`;
  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: desc,
          url: propertyURL,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert("Share feature is not supported in your browser.");
    }
  };

  return (
    <div
      className={`property-item ${itemClass}`}
      datastatus={dataStatuses}
      datatype={dataTypes}
      datalocation={dataLocations}
      datasort={dataSort}
    >
      <div className="property-item__thumb">
        <Link
          to={propertyURL}
          state={{ images, title, desc, price }}
          className="link"
        >
          <img
            src={`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/${images[0]}`}
            alt={title}
            className="cover-img"
          />
        </Link>
        {badgeText && <span className={badgeClass}>{badgeText}</span>}
      </div>
      <div className="property-item__content">
        {price && <h6 className="property-item__price">AED {price}</h6>}
        <h6 className="property-item__title">
          <Link
            to={propertyURL}
            state={{ images, title, desc, price }}
            className="link"
          >
            {truncateTitle(title, 4)}
          </Link>
        </h6>
        <p className="property-item__location d-flex gap-2">
          <span className={`icon ${iconsClass}`}>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          {location}
        </p>
        <p className="amenities-list__item flx-align property-item__type d-flex gap-2">
          <span className={`icon ${iconsClass}`}>
            <FaBuilding />
          </span>
          {type}
        </p>
        <ul className="amenities-list flx-align">
          {bedrooms && (
            <li className="amenities-list__item flx-align">
              <span className={`icon ${iconsClass}`}>
                <FaBed />
              </span>
              <span className="text">{bedrooms}</span>
            </li>
          )}
          {bathrooms && (
            <li className="amenities-list__item flx-align">
              <span className={`icon ${iconsClass}`}>
                <FaBath />
              </span>
              <span className="text">{bathrooms} Baths</span>
            </li>
          )}
          {size && (
            <li className="amenities-list__item flx-align">
              <span className={`icon ${iconsClass}`}>
                <FaRulerCombined />
              </span>
              <span className="text">{size} SqFt</span>
            </li>
          )}
        </ul>
        <div className="property-item__bottom d-flex justify-content-between align-items-center">
          {contactName && (
            <div className="amenities-list__item flx-align property-item__contact-name d-flex align-items-center">
              <FaUser className={`icon ${iconsClass}`} />
              <span>{contactName}</span>
            </div>
          )}
          <div className="property-item__contact-icons d-flex gap-2 align-items-center">
            {contactPhone && (
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FaPhoneAlt className={`icon ${iconsClass}`} />
                <span>Call</span>
              </a>
            )}
            {contactEmail && (
              <a
                href={emailURL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FaEnvelope className={`icon ${iconsClass}`} />
                <span>Email</span>
              </a>
            )}
            <button onClick={handleShare} className="contact-icon">
              <FaShareAlt className={`icon ${iconsClass}`} />
              <span>Share</span>
            </button>
          </div>
        </div>
        {btnRenderBottom && (
          <Link
            to={propertyURL}
            state={{ images, title, desc, price }}
            className={`simple-btn ${btnClass}`}
          >
            See more
            <span className="icon-right">
              <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        )}
      </div>
      <style jsx>{`
        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #C99200;
          color: white;
          border-radius: 5px;
          padding: 5px 10px;
          text-decoration: none;
          font-size: 12px;
          font-weight: bold;
          border: none;
          cursor: pointer;
        }

        .contact-icon .icon {
          margin-right: 5px;
        }

        .phone-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default PropertyItem;
