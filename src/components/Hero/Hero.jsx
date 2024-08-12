import React from 'react'
import './Hero.css'
import { user1 } from '../../assets/assets'
import { HiOutlineDownload, HiPhone } from 'react-icons/hi'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-title'>
                <h1>Construisons ensemble votre prochain projet web.</h1>
                <p>Le code, c'est ma passion. Et JavaScript, c'est mon langage de prédilection pour exprimer ma créativité sur le web.</p>
                <div className="hero-btn">
                    <button className="buttons"><span>Curruculum vitae <HiOutlineDownload className='icon' /></span></button>
                    <button className="button-hero"><span>Contactez-moi <HiPhone className='icon' /></span></button>
                </div>
            </div>
            <div className='hero-image'>
                <svg width="400" height="400" viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0984e3" d="
                    M50,50 
                    H150 
                    A20,20 0 0 1 170,70 
                    V130 
                    A20,20 0 0 1 150,150 
                    H50 
                    A20,20 0 0 1 30,130 
                    V70 
                    A20,20 0 0 1 50,50 
                    Z" />
                    <image
                        href={user1}
                        x="49%"
                        y="24.7%"
                        width="135"
                        height="165"
                        transform='translate(-50, -50)'
                    />
                </svg>
            </div>
        </div>
    )
}

export default Hero
