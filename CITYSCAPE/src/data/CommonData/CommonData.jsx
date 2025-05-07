import React from "react";

// Top header Info
export const offCanvasInfos = [
  {
    icon: <i className="fas fa-map-marker-alt"></i>,
    text: "Al Fajer Complex Block B-37b, Umm Hurair road ​Oud Metha, Bur Dubai, Dubai, Dubai Municipality",
    link: "",
  },
  {
    icon: <i className="fas fa-phone"></i>,
    text: ["+971 56 688 0685"],
    link: ["tel:", "tel:"],
  },
  {
    icon: <i className="fas fa-envelope"></i>,
    text: ["info@growandmore.ae"],
    link: ["mailto:", "mailto:"],
  },
];

// Social List
export const socialLists = [
  {
    link: "https://www.facebook.com/growandmoredubai",
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    link: "https://www.linkedin.com/company/grow-more-real-estate/",
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    link: "https://www.instagram.com/growandmoredubai/",
    icon: <i className="fab fa-instagram"></i>,
  },
];

// Star Rating
export const starRatings = [
  {
    icon: <i className="fas fa-star"></i>,
  },
  {
    icon: <i className="fas fa-star"></i>,
  },
  {
    icon: <i className="fas fa-star"></i>,
  },
  {
    icon: <i className="fas fa-star"></i>,
  },
  {
    icon: <i className="fas fa-star"></i>,
  },
];

// Top header Info
export const topHeaderInfos = [
  {
    icon: <i className="fas fa-phone"></i>,
    text: "+971 56 688 0685",
    link: "tel:",
  },
  {
    icon: <i className="fas fa-envelope"></i>,
    text: "info@growandmore.ae",
    link: "mailto:",
  },
  {
    icon: <i className="fas fa-map-marker-alt"></i>,
    text: "Al Fajer Complex Block B-37",
    link: "https://www.google.com/maps/place/Sultan+Business+Centre/@25.233556,55.3042057,17z/data=!4m10!1m2!2m1!1s330+,+Sultan+Business+Center+,+Oud+Metha,+Dubai,+United+Arab+Emirates!3m6!1s0x3e5f42cc28ba49af:0x57bbd7cd1311987e!8m2!3d25.233556!4d55.3087118!15sCkUzMzAgLCBTdWx0YW4gQnVzaW5lc3MgQ2VudGVyICwgT3VkIE1ldGhhLCBEdWJhaSwgVW5pdGVkIEFyYWIgRW1pcmF0ZXNaQSI_MzMwIHN1bHRhbiBidXNpbmVzcyBjZW50ZXIgb3VkIG1ldGhhIGR1YmFpIHVuaXRlZCBhcmFiIGVtaXJhdGVzkgEPYnVzaW5lc3NfY2VudGVy4AEA!16s%2Fg%2F1vppq_qx?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D",
  },
];

// Header Nav Menu
export const navMenus = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Buy / Sell",
    submenus: [
      {
        title: "Buying Properties",
        description:
          "Explore the opportunities in Dubai's real estate market with Grow and More. Our dedicated team offers personalized guidance to ensure a smooth and efficient investment experience. Start your journey toward owning the perfect property today!",
        image: "/assets/images/nav1.jpg",
        items: [
          {
            text: "Residential Properties for Sale",
            path: "/property-list?status=For%20Sale&type=Apartment,Villas,Townhouses,Warehouses",
          },
          {
            text: "Commercial Properties for Sale",
            path: "/property-list?status=For%20Sale&type=Offices,Commercial Properties",
          },
          {
            text: "List your property",
            path: "/ListProperty",
          },
        ],
      },
    ],
  },
  {
    text: "Rent",
    submenus: [
      {
        title: "Rental Services",
        description:
          "Enjoy a hassle-free renting experience in Dubai with Grow and More. Our experienced team provides customized solutions to meet your rental needs. Discover the ideal property for you today!",
        image: "/assets/images/nav2.jpg",
        items: [
          {
            text: "Residential Properties for Rent",
            path: "/property-list?status=For%20Rent&type=Apartment,Villas,Townhouses,Warehouses",
          },
          {
            text: "Commercial Properties for Rent",
            path: "/property-list?status=For%20Rent&type=Offices,Commercial Properties",
          },
          {
            text: "List your property",
            path: "/ListProperty",
          },
        ],
      },
    ],
  },
  {
    text: "New Projects",
    path: "/OffPlan",
  },
  {
    text: "Areas",
    path: "/areas",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Our Services",
    submenus: [
      {
        title: "Our Services",
        description:
          "At Grow and More, we offer a comprehensive range of services designed to meet all your real estate needs. From property investment and rentals to expert guidance, our team is committed to helping you navigate Dubai's dynamic real estate market with ease. Explore our services today!",
        image: "/assets/images/nav3.jpg",
        items: [
          {
            text: "Buy Properties",
            path: "/services/Buy-Property",
          },
          {
            text: "Sell Properties",
            path: "/ListProperty",
          },
          {
            text: "Properties for Rent",
            path: "/services/Rent-Property",
          },
          {
            text: "Lease Properties",
            path: "/ListProperty",
          },
          {
            text: "Property Management",
            path: "/services/PropertyManagement",
          },
          {
            text: "Conveyancing & Inspections",
            path: "/services/Conveyancing-Inspections",
          },
          {
            text: "Market Research & Consultancy",
            path: "/services/Market-Research",
          },
        ],
      },
    ],
  },
  {
    text: "Our company",
    submenus: [
      {
        title: "Company",
        description:
          "Grow and More drives business growth through tailored strategies, expert consultancy, and innovative solutions. From market analysis to digital marketing, we deliver measurable results for businesses of all sizes.",
        image: "/assets/images/nav4.jpg",
        items: [
          {
            text: "About Us",
            path: "/about-us",
          },
          {
            text: "Contact",
            path: "/contact",
          },
        ],
      },
    ],
  },
];

// Footer Content
export const footerInfos = [
  {
    icon: <i className="fas fa-map-marker-alt"></i>,
    text: "Address",
    address:
      "Al Fajer Complex Block B-37",
  },
  {
    icon: <i className="fas fa-envelope"></i>,
    text: "info@growandmore.ae",
    link: "mailto:",
  },
  {
    icon: <i className="fas fa-phone"></i>,
    text: "Phone Number",
    address: "+971 56 688 0685",
  },
];

export const footerServiceLinks = [
  {
    text: "Buy Properties",
    link: "/services/Buy-Property",
  },
  {
    text: "Sell Properties",
    link: "/ListProperty",
  },
  {
    text: "Properties for Rent",
    link: "/services/Rent-Property",
  },
  {
    text: "Lease Properties",
    link: "/ListProperty",
  },
  {
    text: "Property Management",
    link: "/services/PropertyManagement",
  },
  {
    text: "Conveyancing & Inspections",
    link: "/services/Conveyancing-Inspections",
  },
  {
    text: "Market Research & Consultancy",
    link: "/services/Market-Research",
  },
];

export const footerUsefulLinks = [
  {
    text: "About Us",
    link: "/about-us",
  },
  {
    text: "Contact Us",
    link: "/contact",
  },
];

import FooterGallery1 from "../../../public/assets/images/thumbs/gallery1.png";
import FooterGallery2 from "../../../public/assets/images/thumbs/gallery2.png";
import FooterGallery3 from "../../../public/assets/images/thumbs/gallery3.png";
import FooterGallery4 from "../../../public/assets/images/thumbs/gallery4.png";
import FooterGallery5 from "../../../public/assets/images/thumbs/gallery5.png";
import FooterGallery6 from "../../../public/assets/images/thumbs/gallery6.png";
export const footerGallery = [
  {
    img: FooterGallery1,
    link: "https://www.facebook.com/growandmoredubai",
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    img: FooterGallery2,
    link: "https://www.instagram.com",
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    img: FooterGallery3,
    link: "https://www.instagram.com",
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    img: FooterGallery4,
    link: "https://www.instagram.com",
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    img: FooterGallery5,
    link: "https://www.instagram.com",
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    img: FooterGallery6,
    link: "https://www.instagram.com",
    icon: <i className="fab fa-instagram"></i>,
  },
];

export const BottomFooterLink = [
  {
    text: "Terms & Condition",
    link: "/contact",
  },
  {
    text: "Privacy Policy",
    link: "/contact",
  },
  {
    text: "Contact Us",
    link: "/contact",
  },
];
