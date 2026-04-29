import React, { useState } from "react";
import Logo from "../assets/A Typo.png";
import "./styles/nav.css";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className={`links ${open ? "active" : ""}`}>
        <a href="/">A Propos</a>
        <a href="/">Services</a>
        <a href="/">Réalisation</a>
        <a href="/">Equipe</a>
        <a href="/">Contact</a>
      </div>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav;