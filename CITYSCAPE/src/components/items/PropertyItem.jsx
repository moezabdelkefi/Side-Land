import React from "react";
import { Link } from "react-router-dom";

const PropertyItem = ({ property, itemClass, badgeText, badgeClass }) => {
  const { images, price, title } = property;

  const propertyURL = `/property/${property._id}`;
  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <div className={`property-item ${itemClass}`}>
      <div className="property-item__thumb">
        <Link
          to={propertyURL}
          state={{ images, title, price }}
          className="link"
        >
          <img
            src={`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/${images[0]}`}
            alt={title}
            className="cover-img"
            style={{
              height: "200px", // Set a fixed height
              objectFit: "cover", // Ensure the image scales properly
              width: "100%", // Ensure it spans the container width
            }}
          />
        </Link>
      </div>
      <div
        className="property-item__content"
        style={{
          backgroundColor: "#181616",
          padding: "10px",
          borderRadius: "5px",
          height: "100px", // Set a fixed height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h6 className="property-item__title">
          {truncateTitle(title, 4)}
        </h6>
        {price && (
          <h6 className="property-item__price" style={{ color: "#cba35e" }}>
            AED {price}
          </h6>
        )}
      </div>
    </div>
  );
};

export default PropertyItem;