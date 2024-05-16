import { Link } from "react-router-dom";
import logo from "../assets/icons/logo+name-s.png";
import "./Header.scss";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Header({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsVisible(scrollTop < lastScrollTop || scrollTop < 100);
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Header ${isVisible ? "show" : "hide"}`}>
      <Link className="Header__link" to="/">
        <img src={logo} alt="Accro Verdon" className="Header__logo" />
      </Link>
      <Navbar className="Header__Navbar" />
      {children}
    </div>
  );
}
