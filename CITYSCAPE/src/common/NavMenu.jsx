import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { navMenus } from "../data/CommonData/CommonData";

const NavMenu = ({ navMenusClass }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleDropdownOpen = (index) => {
    clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleDropdownClose = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 50);
  };

  if (!navMenus || !Array.isArray(navMenus)) {
    return null;
  }

  return (
    <ul className={`nav-menu flx-align ${navMenusClass}`}>
      {navMenus.map((navMenu, index) => (
        <li
          className={`nav-menu__item ${
            navMenu.submenus ? "has-mega-menu" : ""
          } ${activeIndex === index ? "active" : ""}`}
          key={index}
          onMouseEnter={() => handleDropdownOpen(index)}
          onMouseLeave={handleDropdownClose}
        >
          <NavLink to={navMenu.path} className="nav-menu__link">
            {navMenu.text}
            {navMenu.submenus && <i className="fas fa-chevron-down nav-menu__icon"></i>}
          </NavLink>
          {navMenu.submenus && (
            <div
              className="mega-menu"
              onMouseEnter={() => clearTimeout(timeoutRef.current)}
              onMouseLeave={handleDropdownClose}
            >
              <div className="mega-menu__content">
                <div className="mega-menu__column">
                  <h6 className="mega-menu__title">{navMenu.submenus[0].title}</h6>
                  <p className="mega-menu__description">{navMenu.submenus[0].description}</p>
                </div>
                {navMenu.submenus.map((submenu, subIndex) => (
                  <div className="mega-menu__column" key={subIndex}>
                    <ul className="mega-menu__list">
                      {submenu.items.map((item, itemIndex) => (
                        <li className="mega-menu__item" key={itemIndex}>
                          <NavLink to={item.path} className="mega-menu__link">
                            <i className="fas fa-arrow-right"></i>
                            {item.text}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {navMenu.submenus[0].image && (
                  <div className="mega-menu__image">
                    <img src={navMenu.submenus[0].image} alt={navMenu.submenus[0].title} />
                  </div>
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;