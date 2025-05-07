import React from "react";
import NewsletterThumb from "/assets/images/thumbs/contact.jpg";
import Button from "../common/Button";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter bg-white padding-b-120 padding-t-120">
        <div className="container container-two">
          <div
            className="newsletter-content text-center background-img"
            style={{ backgroundImage: `url(${NewsletterThumb})` }}
          >
            <h2 className="newsletter-content__title text-white">
              Do you have any question?
            </h2>
            <p className="newsletter-content__desc text-white fw-light font-18">
              Get in touch with us today! We're here to help with all your real
              estate needs and provide expert guidance every step of the way.
            </p>
            <div className="about-two__button" style={{ textAlign: "center" }}>
              <Button
                btnLink="/contact"
                btnClass="btn-main"
                btnText="Contact Us"
                spanClass="icon-right icon"
                iconClass="fas fa-arrow-right"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
