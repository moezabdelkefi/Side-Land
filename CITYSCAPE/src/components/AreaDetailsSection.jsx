import React from "react";
import { useLocation } from "react-router-dom";

const AreasDetailsSection = () => {
  const location = useLocation();
  const { id, image, name, about, community_overview, in_short, properties, rental_trends, sales_trends, roi, famous_buildings, transportation, schools, healthcare, hotels } = location.state;

  // Get formatted current date
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;

  return (
    <section className="project-details padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          {/* Selected area details */}
          <div className="col-lg-8">
            <div className="project-details__thumb">
            <h2 className="project-details__title">{name}</h2>
              <img
                src={image.thumb}
                alt={name}
                className="cover-img"
              />
            </div>
            <div className="project-details__content">
              <h5 className="project-details__title">{name}</h5>
              <p className="project-details__desc font-18">{about}</p>

              <h6 className="border-title">Community Overview</h6>
              <p className="project-details__desc font-18">{community_overview.description}</p>

              <h6 className="border-title">In Short</h6>
              <ul className="text-list-two">
                {in_short.map((item, index) => (
                  <li className="text-list-two__item font-18" key={index}>{item}</li>
                ))}
              </ul>

              {/* <h6 className="border-title">Properties</h6> */}
              {properties && Object.entries(properties).map(([propertyType, propertyDetails], index) => (
                <div key={index}>
                  <h6 className="border-title">{propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</h6>
                  {typeof propertyDetails === 'string' ? (
                    <p className="project-details__desc font-18">{propertyDetails}</p>
                  ) : Array.isArray(propertyDetails) ? (
                    propertyDetails.map((detail, subIndex) => (
                      <div key={subIndex}>
                        {Object.entries(detail).map(([key, value], subSubIndex) => (
                          <p className="project-details__desc font-18" key={subSubIndex}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                          </p>
                        ))}
                      </div>
                    ))
                  ) : (
                    Object.entries(propertyDetails).map(([key, value], subIndex) => (
                      <p className="project-details__desc font-18" key={subIndex}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                      </p>
                    ))
                  )}
                </div>
              ))}

              <h6 className="border-title">Rental Trends</h6>
              <ul className="text-list-two">
                {rental_trends.map((trend, index) => (
                  <li className="text-list-two__item font-18" key={index}>{trend.type}: {trend.average_rent} AED</li>
                ))}
              </ul>

              <h6 className="border-title">Sales Trends</h6>
              <ul className="text-list-two">
                {sales_trends.map((trend, index) => (
                  <li className="text-list-two__item font-18" key={index}>{trend.type}: {trend.average_price} AED</li>
                ))}
              </ul>

              <h6 className="border-title">ROI</h6>
              <ul className="text-list-two">
                {Object.entries(roi).map(([type, roiValue], index) => (
                  <li className="text-list-two__item font-18" key={index}>{type}: {roiValue}%</li>
                ))}
              </ul>

              <h6 className="border-title">Famous Buildings</h6>
              <ul className="text-list-two">
                {famous_buildings.map((building, index) => (
                  <li className="text-list-two__item font-18" key={index}>
                    {building.name}: {building.one_bedroom_rent} AED (1BR), {building.two_bedroom_rent} AED (2BR)
                  </li>
                ))}
              </ul>

              <h6 className="border-title">Transportation</h6>
              <ul className="text-list-two">
                {transportation.map((transport, index) => (
                  <li className="text-list-two__item font-18" key={index}>{transport}</li>
                ))}
              </ul>

              <h6 className="border-title">Schools</h6>
              <ul className="text-list-two">
                {schools.map((school, index) => (
                  <li className="text-list-two__item font-18" key={index}>{school}</li>
                ))}
              </ul>

              <h6 className="border-title">Healthcare</h6>
              <ul className="text-list-two">
                {healthcare.map((facility, index) => (
                  <li className="text-list-two__item font-18" key={index}>{facility.name} ({facility.type})</li>
                ))}
              </ul>

              <h6 className="border-title">Hotels</h6>
              <ul className="text-list-two">
                {hotels.map((hotel, index) => (
                  <li className="text-list-two__item font-18" key={index}>{hotel}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasDetailsSection;