import React from "react";
import { addListings } from "../data/OthersPageData/OthersPageData";

const ListingSidebar = () => {
  const handleScroll = (event, link) => {
    event.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="listing-sidebar">
        <ul id="list-scroll" className="sidebar-list d-flex flex-column gap-2">
          {addListings.map((addListing, addListingIndex) => {
            return (
              <li className="sidebar-list__item" key={addListingIndex}>
                <a
                  href={addListing.link}
                  className="sidebar-list__link"
                  onClick={(e) => handleScroll(e, addListing.link)}
                >
                  {addListing.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListingSidebar;
