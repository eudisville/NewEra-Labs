import React from 'react'
import Logo from '../assets/NE.png'
import './styles/nav.css'

function Nav() {
  return (
    <nav>
      <div className="logo"><img src={Logo} alt="Logo" /></div>
      <div className="links">
        <a href="/">A Propos</a>
        <a href="/">Services</a>
        <a href="/">Travail</a>
        <a href="/">Equipe</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  )
}

export default Nav
