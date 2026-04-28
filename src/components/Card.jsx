import React from 'react'
import './styles/card.css'

function Card({ image, title, description }) {
  return (
    <div className='card'>
      <div className="container">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
