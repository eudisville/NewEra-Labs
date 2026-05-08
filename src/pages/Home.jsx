import React from 'react'
import Header from '../components/Header'
import back from "../assets/team.jpg"

function Home() {
  return (
    <div>
      <Header
        title="Beriverse for Business" 
        content="Bienvenue sur le site officiel de Beriverse Incorporation" 
        image={back} 
        headerHeight="100vh"
      />
    </div>
  )
}

export default Home
