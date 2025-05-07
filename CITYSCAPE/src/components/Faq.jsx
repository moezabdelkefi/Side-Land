import React from "react";
import FaqAccordion from "../common/FaqAccordion";
import FaqTwoThumb from "/assets/images/thumbs/faq-two-img.jpg?url";
import SectionHeading from "../common/SectionHeading";

const Faq = () => {
  return (
    <section className="faq-two padding-y-120">
      <div className="container container-two">
        <SectionHeading
          headingClass=""
          subtitle="Ask question"
          subtitleClass="bg-gray-100"
          title="Let us find the perfect property for you"
          renderDesc={true}
          desc="Real estate is a lucrative ind involves the buying selling and reproperties. It Real estate is a lucrative ind involves. Real estate is a lucrative"
          renderButton={false}
          buttonClass="btn-main"
          buttonText="View More"
        />

        <div className="row gy-4">
          <div className="col-lg-6">
            <FaqAccordion accordionClass="style-two" itemClass="" />
          </div>
          <div className="col-lg-6 ps-lg-4 d-lg-block d-none">
            <div className="faq-two-thumb">
              <img src="/assets/images/thumbs/faq-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
