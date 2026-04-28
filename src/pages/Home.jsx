import React from 'react'
import Nav from '../components/Nav'
import './styles/style.css'
import Woman from '../assets/wom.png'
import Py from '../assets/icons/python.png'
import Java from '../assets/icons/java.png'
import JS from '../assets/icons/java-script.png'
import SQL from '../assets/icons/sql.png'
import Ios from '../assets/icons/apple.png'
import Android from '../assets/icons/android.png'
import AI from '../assets/icons/chatgpt.png'
import PS from '../assets/icons/photoshop.png'
import Il from '../assets/icons/illustrator.png'
import Rose from '../assets/rose.jpg'
import Card from '../components/Card'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Nav />
      <main>
        <header>
            <div className="left">
                <h1>L'Agence Numérique Nouvelle Génération</h1>
                <p>Du problème à la solution, NewEra Labs développe des Applications Mobile & Web & Solution IA.</p>
                <button>Prendre Rendez-Vous</button>
            </div>
            <div className="right">
                <div className="container">
                    <img src={Woman} alt="Woman" />
                </div>
            </div>
        </header>

        <section className='about'>
            <h1>A Propos</h1>
            <p>NewEra Labs est une agence web spécialisée dans le développement d’applications web & mobile, et la conception de solutions digitales simples pour les entreprises.
            Nous proposons également des services en intelligence artificielle et en design graphique pour accompagner nos clients de bout en bout.</p>

            <div className="slogan">
                <h3>Welcome in New Era</h3>
            </div>
        </section>

        <section className='services'>
            <h1>Services</h1>
            <div className="service">

                <div className="serv">
                    <h5>01</h5>
                    <h2>Développement Web</h2>
                    <p>Nous créons des sites web modernes, performants et adaptés à vos besoins, en utilisant les dernières technologies du marché.</p>
                </div>
                <div className="serv">
                    <h5>02</h5>
                    <h2>Développement Mobile</h2>
                    <p>Nous créons des applications mobiles modernes, performantes et adaptées à vos besoins, en utilisant les dernières technologies du marché.</p>
                </div>
                <div className="serv">
                    <h5>03</h5>
                    <h2>Solutions AI</h2>
                    <p>Nous concevons des solutions d'intelligence artificielle pour automatiser vos processus et améliorer votre productivité.</p>
                </div>
                <div className="serv">
                    <h5>04</h5>
                    <h2>Design</h2>
                    <p>Nous concevons des interfaces utilisateur modernes et intuitives pour vos applications web et mobile.</p>
                </div>
            </div>
        </section>

        <div className="tech">
            <div className="tech-items">
                <h1>Aperçu des Technologies</h1>
                <div className="stack">
                    <img src={Py} alt="Python" />
                    <img src={Java} alt="Java" />
                    <img src={JS} alt="JavaScript" />
                    <img src={SQL} alt="SQL" />
                    <img src={Ios} alt="iOS" />
                    <img src={Android} alt="Android" />
                    <img src={AI} alt="AI" />
                    <img src={PS} alt="Photoshop" />
                    <img src={Il} alt="Illustrator" />
                </div>
            </div>
        </div>

        <div className="work">
            <div className="work-items">
                <div className="top">
                    <h1>Réalisations</h1>
                    <a href="">Voir Plus</a>
                </div>

                <div className="cards">
                    <Card 
                        image={Rose}
                        title="Application de Gestion de Projets"
                        description="Une application complète pour gérer et suivre vos projets de développement."
                    />
                    <Card 
                        image={Rose}
                        title="Application de Gestion de Projets"
                        description="Une application complète pour gérer et suivre vos projets de développement."
                    />
                    <Card 
                        image={Rose}
                        title="Application de Gestion de Projets"
                        description="Une application complète pour gérer et suivre vos projets de développement."
                    />
                </div>
            </div>
        </div>

        <section className="talk">
            <div className="talk-item">
                <h1>Parlons de votre projet</h1>
                <p>Contactez-nous pour discuter de vos idées et trouver la solution qui vous convient.</p>
                <button>Prendre Rendez-Vous</button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
