import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOnMobile = () => {
    setIsOpen(false);
  };

  return (
    <nav className="Navbar">
      <ul className={`Navbar__list ${isOpen ? "Navbar__list--open" : ""}`}>
        <li className="Navbar__item">
          <NavLink className="Navbar__link" to="/" onClick={closeMenuOnMobile}>
            Accueil
          </NavLink>
        </li>
        <li className="Navbar__item">
          <NavLink
            className="Navbar__link"
            to="/stages"
            onClick={closeMenuOnMobile}
          >
            Parcours
          </NavLink>
        </li>
        <li className="Navbar__item">
          <NavLink
            className="Navbar__link"
            to="/snacking"
            onClick={closeMenuOnMobile}
          >
            Guinguette
          </NavLink>
        </li>
        <li className="Navbar__item">
          <NavLink
            className="Navbar__link"
            to="/gallery"
            onClick={closeMenuOnMobile}
          >
            Galerie
          </NavLink>
        </li>
        <li className="Navbar__item">
          <NavLink
            className="Navbar__link"
            to="/informations"
            onClick={closeMenuOnMobile}
          >
            Informations
          </NavLink>
        </li>
        {/*
        <li className="Navbar__item">
          <NavLink
            className="Navbar__link"
            to="/security"
            onClick={closeMenuOnMobile}
          >
            Sécurité
          </NavLink>
        </li>
      */}
        <li className="Navbar__item">
          <NavLink
            className="Navbar__link"
            to="/reservation"
            onClick={closeMenuOnMobile}
          >
            Réservation
          </NavLink>
        </li>
      </ul>
      <guidap-cart-button></guidap-cart-button>
      <div className="menuBtn">
        {isOpen ? (
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        ) : (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <span>Menu</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
