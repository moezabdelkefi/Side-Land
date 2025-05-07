import React from "react";
import { footerInfos } from "../../data/CommonData/CommonData";

const FooterInfo = () => {
  return (
    <>
      <div className="row gy-4">
        {footerInfos.map((footerInfo, footerInfoIndex) => (
          <div className="col-12" key={footerInfoIndex}>
            <div className="contact-info d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <span className="contact-info__icon text-gradient">
                  {footerInfo.icon}
                </span>
                <span className="contact-info__text text-white">
                  {footerInfo.text}
                </span>
              </div>
              {footerInfo.address && (
                <div className="d-flex align-items-center gap-2">
                  <span className="contact-info__address text-white">
                    {footerInfo.address}
                  </span>
                </div>
              )}
              {footerInfo.email && (
                <div className="d-flex align-items-center gap-2">
                  <span className="contact-info__icon text-gradient">📧</span>
                  <span className="contact-info__email text-white">
                    {footerInfo.email}
                  </span>
                </div>
              )}
              {footerInfo.phone && (
                <div className="d-flex align-items-center gap-2">
                  <span className="contact-info__icon text-gradient">📞</span>
                  <span className="contact-info__phone text-white">
                    {footerInfo.phone}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterInfo;
