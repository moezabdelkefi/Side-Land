import React from "react";
import BottomFooterLinks from "./footer/BottomFooterLinks";

const FooterBottom = (props) => {
  return (
    <>
      <div className={`bottom-footer ${props.footerClass}`}>
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text">
              &copy; Grow and More Real Estate {new Date().getFullYear()} | All Rights Reserved. Developed By {""}    
              <a href="https://www.badfi.tech" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#C99200' }}>Badfi.Tech</a>
            </p>
            <BottomFooterLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
