import React from "react";

const AboutUs = () => {
  return (
    <section className="about-section" style={{ backgroundColor: "black", color: "white" }}>
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">About Side Land Properties</h2>
          <p className="about-description">
            We are a premier real estate agency specializing in luxury properties across Dubai. 
            With over 15 years of experience in the market, we've helped thousands of clients 
            find their dream homes and investment properties. Our team of expert brokers 
            provides personalized service to match each client's unique needs.
          </p>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          padding: 80px 0;
          background-color: #fff;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .about-content {
          // max-width: 800px;
          text-align: left;
        }
        
        .about-title {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 15px;
        }
        
        .about-title:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 80px;
          height: 4px;
          background: #C99200;
        }
        
        .about-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #cba35e;
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 50px 0;
          }
          
          .about-title {
            font-size: 2rem;
          }
          
          .about-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;