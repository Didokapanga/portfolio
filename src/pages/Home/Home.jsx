import React from 'react'
import './Home.css'
import { Helmet } from 'react-helmet-async'
import Hero from '../../components/Hero/Hero'
import Outils from '../../components/Outils/Outils'
import Presentation from '../../components/Presentation/Presentation'
import Services from '../../components/Services/Services'

const Home = () => {
    return (
        <>
            <div className='home'>
                <Hero />
            </div>
            <div className='home-presentation'>
                <Presentation />
            </div>
            <div className="home">
                <Services />
            </div>
        </>
    )
}

export default Home
