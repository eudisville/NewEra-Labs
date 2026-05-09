import React from 'react'
import Header from '../components/Header'
import back from "../assets/team.jpg"
import './styles/style.css'
import Card from '../components/Card'
import Footer from '../components/Footer'
import tech from "../assets/tech.jpg"
import ma from "../assets/man.jpg"
import com from "../assets/com.jpg"
import fin from "../assets/fin.jpg"
import bu from "../assets/bu.jpg"
import telco from "../assets/telco.jpg"

function Home() {
  return (
    <div>
      <Header
        title="Beriverse for Business" 
        content="Façonner votre entreprise en formant vos équipes." 
        image={back} 
        headerHeight="100vh"
      />

      <section className="about">
        <div className="about-top">
          <h2>À Propos</h2>
          <p>
            <span>Beriverse for Business</span> est un cabinet de formation professionnelle du groupe <span>Beriverse Incorporation</span> dédié au développement des compétences en entreprise.
            <br />
            <br />
            Nous accompagnons les organisations dans la montée en compétence de leurs équipes à travers des formations pratiques, adaptées aux réalités du marché et aux enjeux de transformation des métiers.
          </p>
        </div>

        <div className="image"></div>
      </section>

      <section className="domains">
        <div className="domains-items">

          <div className="text">
            <h2>Nos Domaines d'Expertise</h2>
            <p>Les domaines d'expertise de Beriverse for Business couvrent une large gamme de compétences essentielles pour le développement professionnel et la transformation des organisations.</p>
          </div>

          <div className="cards">
            <Card title="Technologie" backgroundImage={tech} />
            <Card title="Management" backgroundImage={ma} />
            <Card title="Communication" backgroundImage={com} />
            <Card title="Finances" backgroundImage={fin} />
            <Card title="Business" backgroundImage={bu} />
            <Card title="Télécommunications" backgroundImage={telco} />
          </div>

        </div>
      </section>

      <section className="contact">
        <div className="contact-box">
          <div className="contact-text">

            <h2>Vous souhaitez en savoir plus ?</h2>
            <p>Vous avez des questions ou souhaitez en savoir plus sur nos formations ? N'hésitez pas à nous contacter, nous sommes là pour vous aider à trouver la solution de formation qui correspond le mieux à vos besoins.</p>
            <a href="/contact" className="contact-button">Contactez-nous</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
