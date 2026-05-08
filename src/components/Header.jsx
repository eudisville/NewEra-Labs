import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/header.css'
import './styles/nav.css'
import DefaultLogo from "../assets/fB.png"

function Header({

  // Contenu header
  title,
  content,
  image,
  file,
  // Personnalisation nav
  logo = DefaultLogo,
  logoWidth = "190px",
  navBgColor = "white",
  navHeight = "100px",
  linkFontSize = "1rem",
  linkColor = "#000000",
  // links
  links = [
    { label: "Notre Groupe", to: "/" },
    { label: "Technologie", to: "/tech" },
    { label: "Academy", to: "/academy" },
  ], 

  // Personnalisation header
  headerHeight = "85vh",
  overlayColor = "rgba(0, 0, 0, 0.3)",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,
      });
    }, []);

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), ${overlayColor}), url(${image})`,
        height: headerHeight,
      }}
    >
      <nav style={{ backgroundColor: navBgColor, height: navHeight }}>
        <div className="logo">
          <a href="/"><img style={{ width: logoWidth }} src={logo} alt="Logo" /></a>
        </div>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

  <div
    className={`links ${isOpen ? 'active' : ''}`}
    onClick={toggleMenu}
    style={{ fontSize: linkFontSize }}
  >
    {links.map((link, index) =>
      link.to.startsWith("#") ? (
        <a
          key={index}
          href={link.to}
          style={{ color: link.color || linkColor }}
        >
          {link.label}
        </a>
      ) : (
        <a
          key={index}
          href={link.to}
          style={{ color: link.color || linkColor }}
        >
          {link.label}
        </a>
      )
    )}
  </div>
      </nav>

      <div className="header">
        <div className="text" data-aos="fade-up">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </header>
  )
}

export default Header