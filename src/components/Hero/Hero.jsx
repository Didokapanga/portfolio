import React from 'react'
import './Hero.css'
import { image_1, user1 } from '../../assets/assets'
import { HiOutlineDownload, HiPhone } from 'react-icons/hi'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className='hero-title'>
                    <p className='hero-info'>Développeur <span>React Frontend</span></p>
                    <h1>Construisons ensemble votre prochain projet web.</h1>
                    <p>Le code, c'est ma passion. Et React, c'est mon langage de prédilection pour exprimer ma créativité sur le web.</p>
                    <div className="hero-btn">
                        <button className="buttons"><span>Curruculum vitae <HiOutlineDownload className='hero-btn-icon' /></span></button>
                        <button className="button-hero"><span>Contactez-moi <HiPhone className='hero-btn-icon' /></span></button>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={image_1} alt="" className='hero-img' />
                </div>
            </div>
        </div>
    )
}

export default Hero
