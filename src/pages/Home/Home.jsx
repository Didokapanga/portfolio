import React from 'react'
import './Home.css'
import { Helmet } from 'react-helmet-async'
import Hero from '../../components/Hero/Hero'
import Outils from '../../components/Outils/Outils'
import Presentation from '../../components/Presentation/Presentation'

const Home = () => {
    return (
        <>
            <div className='home'>
                <Hero />
            </div>
            <div className='home-presentation'>
                <Presentation />
            </div>
        </>
    )
}

export default Home
