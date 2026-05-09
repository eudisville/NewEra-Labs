import React from 'react'
import './styles/footer.css'
// import Logo from '../components/assets/Logo.png'

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-items">
      <div className="footer-top">
        <div className="footer-about">
            <img src="" alt="" />
            <p>Beriverse for Business est un cabinet de formation professionnelle 
            du groupe Beriverse Incorporation dédié au développement des compétences en entreprise. 
            </p>
        </div>

        <div className="footer-us">
            <h3>Coordonnées</h3>
            <div className="footer-links">
                <p>Cocody, Angré Terminus 81/82 à 5 mètres de la Pharmacie Sainte-Marthe</p>
                <a href="mailto:hello@beriverse.fr" target="_blank" rel="noopener noreferrer">hello@beriverse.fr</a>
                <p>+225 07 18 617 053 <br />+225 01 41 577 353</p>
                <p></p>
            </div>
        </div>
        <div className="footer-us">
            <h3>Liens Importants</h3>
            <div className="footer-links">
                <a href="/">Contact</a>
                <a href="/formations">Catalogue des Formations</a>
                <a href="/school">Brochure</a>
            </div>
        </div>
        <div className="footer-us">
            <h3>Réseaux Sociaux</h3>
            <div className="footer-links">
                <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href="" target="_blank" rel="noopener noreferrer">X/Twitter</a>                              
            </div>
        </div>
      </div>

    <div className="line"></div>

      <div className="footer-bottom">
        <h4>Beriverse for Business 2026 © Branche B2B de Beriverse Incorporation</h4>
      </div>
    </div>
    </div>
  )
}

export default Footer
