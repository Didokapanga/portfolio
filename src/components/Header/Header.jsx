import React, { useState } from 'react'
import './Header.css'
import { Logo } from '../../assets/assets'
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai'
import { FaBarsStaggered } from 'react-icons/fa6'

const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    //     document.body.classList.toggle('sidebar-open');
    // };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


    return (
        <div className='header'>
            <div className="logo-img">
                <a href="/"><img src={Logo} alt="Dido Développeur Freelance" className='logo' /></a>
            </div>
            <div className="navigation">
                <ul className='menu-center'>
                    <li className="dropdown">
                        <a href="#experience">Expérience</a>
                        <div className="dropdown-content">
                            <p>Plus de détails sur l'expérience professionnelle.</p>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#projets">Projets</a>
                        <div className="dropdown-content">
                            <p>Découvrir les projets réalisés.</p>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#apropos">A propos</a>
                        <div className="dropdown-content">
                            <p>En savoir plus sur moi.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="navigation-btn">
                <a href="#contact">
                    <button className="button">
                        <span className='btn-icon'>
                            Prenez contact
                            <AiOutlineRight />
                        </span>
                    </button>
                </a>
            </div>
            <div className="burger-menu" onClick={toggleSidebar}>
                <FaBarsStaggered />
            </div>
            <div className={`overlay ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <AiOutlineClose className="close-icon" onClick={toggleSidebar} />
                    <ul>
                        <li onClick={toggleSidebar}><a href="#experience">Expérience</a></li>
                        <li onClick={toggleSidebar}><a href="#projets">Projets</a></li>
                        <li onClick={toggleSidebar}><a href="#apropos">A propos</a></li>
                        <li onClick={toggleSidebar}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
