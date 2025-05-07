import React from "react";
import Slider from "react-slick";
import partnerLogo1 from "/assets/images/partners/Azizi.png";
import partnerLogo2 from "/assets/images/partners/Binghatti.png";
import partnerLogo3 from "/assets/images/partners/Damac.png";
import partnerLogo4 from "/assets/images/partners/Danube.png";
import partnerLogo5 from "/assets/images/partners/Dar-Al-Arkan.png";
import partnerLogo6 from "/assets/images/partners/Ellington-Properties.png";
import partnerLogo7 from "/assets/images/partners/FIVE.png";
import partnerLogo8 from "/assets/images/partners/MAG.png";
import partnerLogo9 from "/assets/images/partners/Majid-Al-Futtaim.png";
import partnerLogo10 from "/assets/images/partners/Meraas-1.png";
import partnerLogo11 from "/assets/images/partners/Nakheel.png";
import partnerLogo12 from "/assets/images/partners/Omniyat.png";
import partnerLogo13 from "/assets/images/partners/Shapoorji-Pallonji.png";
import partnerLogo14 from "/assets/images/partners/SOL-Properties.png";
import partnerLogo15 from "/assets/images/partners/SRG-Holding-Limkited.png";
import partnerLogo16 from "/assets/images/partners/ALHABTOOR.png";
import partnerLogo17 from "/assets/images/partners/Sobha-Realty.png";
import partnerLogo18 from "/assets/images/partners/Emaar.png";
import partnerLogo19 from "/assets/images/partners/Wasl-Properties.png";
import partnerLogo20 from "/assets/images/partners/Reportage-Properties.png";
import partnerLogo21 from "/assets/images/partners/Bloom.png";
import partnerLogo22 from "/assets/images/partners/Tiger.png";
import partnerLogo23 from "/assets/images/partners/NShama.png";
import SectionHeading from "../common/SectionHeading";

const PartnersSlider = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partnerLogos = [
    partnerLogo1,
    partnerLogo2,
    partnerLogo3,
    partnerLogo4,
    partnerLogo5,
    partnerLogo6,
    partnerLogo7,
    partnerLogo8,
    partnerLogo9,
    partnerLogo10,
    partnerLogo11,
    partnerLogo12,
    partnerLogo13,
    partnerLogo14,
    partnerLogo15,
    partnerLogo16,
    partnerLogo17,
    partnerLogo18,
    partnerLogo19,
    partnerLogo20,
    partnerLogo21,
    partnerLogo22,
    partnerLogo23,
  ];

  const sliderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <section className="partners-slider padding-y-60">
      <div className="container container-two" style={{ overflow: "hidden", textAlign: "center" }}>
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
          Our Developers
        </h2>
        <h4
          style={{ textAlign: "center", color: "black", paddingBottom: "20px" }}
        >
          The real estate landscape with Grow and More
        </h4>
        <Slider {...settings}>
          {partnerLogos.map((logo, index) => (
            <div key={index} style={sliderStyle}>
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                style={imgStyle}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersSlider;