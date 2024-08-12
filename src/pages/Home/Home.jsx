import React from 'react'
import './Home.css'
import { Helmet } from 'react-helmet-async'
import Hero from '../../components/Hero/Hero'

const Home = () => {
    return (
        <div className='home'>
            {/* <Helmet>
                <title>Home Page</title>
                <meta name="Accueil" content="Contenu de la page principale" />
            </Helmet> */}
            <Hero />
        </div>
    )
}

export default Home
