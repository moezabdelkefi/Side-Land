import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import Logo from "/assets/images/logo/logoo.png?url";
import Button from "../common/Button";

const AreasSection = ({ maxItems }) => {
  const [areasData, setAreasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAreasData = async () => {
      try {
        const response = await fetch("/areas.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const formattedData = data.areas.map((area) => ({
          id: area.id,
          image: area.image,
          name: area.name,
          about: area.about,
          community_overview: area.community_overview,
          in_short: area.in_short,
          properties: area.properties,
          rental_trends: area.rental_trends,
          sales_trends: area.sales_trends,
          roi: area.roi,
          famous_buildings: area.famous_buildings,
          transportation: area.transportation,
          schools: area.schools,
          healthcare: area.healthcare,
          hotels: area.hotels,
        }));
        setAreasData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching areas data:", error);
        setError("Error fetching areas data");
        setLoading(false);
      }
    };

    fetchAreasData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src={Logo} alt="Loading Logo" className="loading-logo" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const convertToSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <>
      <section className="project-page padding-y-120">
        <div className="container container-two">
          <div style={{ textAlign: "center" }}>
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
              Discover Dubai
            </h2>
            <h4
              style={{
                textAlign: "center",
                color: "black",
                marginBottom: "4rem",
              }}
            >
              Discover a district that inspires and excites.
            </h4>
          </div>
          <div className="row gy-4">
            {areasData.slice(0, maxItems).map((area, index) => {
              const {
                id,
                image,
                name,
                about,
                community_overview,
                in_short,
                properties,
                rental_trends,
                sales_trends,
                roi,
                famous_buildings,
                transportation,
                schools,
                healthcare,
                hotels,
              } = area;

              const projectURL = `/areas/${encodeURIComponent(
                convertToSlug(name)
              )}`;

              return (
                <div className={`col-md-4 col-sm-6 col-xs-6`} key={index}>
                  <div className="project-page-thumb">
                    <img src={image.thumb} alt={name} className="cover-img" />
                    <div className="project-page-content">
                      <h6 className="project-page-content__title">
                        <Link
                          to={projectURL}
                          state={{
                            id,
                            image,
                            name,
                            about,
                            community_overview,
                            in_short,
                            properties,
                            rental_trends,
                            sales_trends,
                            roi,
                            famous_buildings,
                            transportation,
                            schools,
                            healthcare,
                            hotels,
                          }}
                          className="link"
                        >
                          {name}
                        </Link>
                      </h6>
                      <p
                        className="project-page-content__desc"
                        style={{ color: "white" }}
                      >
                        {image.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about-two__button" style={{ textAlign: "center" }}>
            <Button
              btnLink="/areas"
              btnClass="btn-main"
              btnText="Learn more"
              spanClass="icon-right icon"
              iconClass="fas fa-arrow-right"
            />
          </div>
        </div>
      </section>
      <style>
        {`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .loading-logo {
            max-width: 150px;
          }
        `}
      </style>
    </>
  );
};

export default AreasSection;
