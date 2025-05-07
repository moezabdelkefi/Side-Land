import React from "react";
import CtaThumb from "/assets/images/thumbs/cta-img.png?url";
import NewsletterForm from "../common/NewsletterForm";

const Cta = (props) => {
  return (
    <section className={`cta padding-b-120 ${props.ctaClass}`}>
      <div className="container container-two">
        <div className="cta-box flx-between gap-2">
          <div className="cta-content">
            <h2 className="cta-content__title">
              Enquire About Our <span className="text-gradient">Property Services</span>{" "}
            </h2>
            {/* <p className="cta-content__desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}

            <NewsletterForm
              formClass="max-w-unset"
              inputClass="bg-danger"
              iconClass="text-gradient"
              propertyTitle={props.propertyTitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
