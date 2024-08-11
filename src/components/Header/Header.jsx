import React from 'react'
import './Header.css'
import { Logo } from '../../assets/assets'
import { AiOutlineRight } from 'react-icons/ai'
import { FaBarsStaggered } from 'react-icons/fa6'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-img">
                <img src={Logo} alt="Dido Développeur Freelance" className='logo' />
            </div>
            <div className="navigation">
                <ul className='menu-center'>
                    <li><a href="#about">Expérience</a></li>
                    <li><a href="#services">Projets</a></li>
                    <li><a href="#portfolio">Services</a></li>
                    {/* <li><a href="#temoignages"></a></li> */}
                    <li><a href="#blog">A propos</a></li>
                </ul>
            </div>
            <div className="navigation-btn">
                <a href="#contact">
                    <button className="button">
                        <span className='btn-icon'>
                            Prenez-contact
                            <AiOutlineRight />
                        </span>
                    </button>
                </a>
            </div>
            <div className="burger-menu">
                <FaBarsStaggered />
            </div>
        </div>
    )
}

export default Header
