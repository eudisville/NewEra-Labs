import React from "react";
import Logo from '../assets/NE.png'
import './styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img src={Logo} alt="NewEra Labs" />
          <p>
            Digital Agency spécialisée en développement web, mobile, IA et design.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="/">A Propos</a>
          <a href="/">Services</a>
          <a href="/">Réalisations</a>
          <a href="/">Equipe</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <p>Développement Web</p>
          <p>DéveloppementMobile</p>
          <p>AI Solutions</p>
          <p>Branding & Design</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Abidjan, Côte d’Ivoire</p>
          <p>hello@beriverse.fr</p>
          <p>+225 07 18 61 70 53</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NewEra Labs. All rights reserved. Part of Beriverse Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;