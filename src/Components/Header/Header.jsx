import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../Assets/logo.png";
import menuImg from "../Assets/menu.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    if (menuOpen) {
      menuRef.current.style.right = "-450px";
    } else {
      menuRef.current.style.right = "0";
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="header-icons">
        <div className="menu">
          <img
            src={menuImg}
            alt="Menu Icon"
            style={{ width: "35px", height: "35px", cursor: "pointer" }}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <nav ref={menuRef}>
        <div className="menu">
          <img
            src={menuImg}
            alt="Menu Icon"
            style={{ width: "35px", height: "35px", cursor: "pointer" }}
            onClick={toggleMenu}
          />
        </div>
        <AnchorLink href="#hero" onClick={toggleMenu}>
          <p>Hero</p>
        </AnchorLink>
        <AnchorLink href="#features" onClick={toggleMenu}>
          <p>Features</p>
        </AnchorLink>
        <AnchorLink href="#howitworks" onClick={toggleMenu}>
          <p>How it works</p>
        </AnchorLink>
        <AnchorLink href="#testimonial" onClick={toggleMenu}>
          <p>Testimonial</p>
        </AnchorLink>
        <AnchorLink href="#about" onClick={toggleMenu}>
          <p>About</p>
        </AnchorLink>
      </nav>
    </div>
  );
};

export default Header;
