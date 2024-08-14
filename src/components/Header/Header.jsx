import React, { useEffect, useState } from 'react'
import './Header.css'
import { Logo } from '../../assets/assets'
import { AiOutlineClose, AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'

const Header = () => {

    const [sticky, setSticky] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        toggleSubMenu()
    };

    const toggleSubMenu = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <div className={`header ${sticky ? 'steacky-menu' : ''}`}>
            <div className="header-content">
                <div className="logo-img">
                    <Link to="/"><img src={Logo} alt="Dido Développeur Freelance" className='logo' /></Link>
                </div>
                <div className="navigation">
                    <ul className='menu-center'>
                        <li className="dropdown">
                            <Link to="/experiences">Expérience</Link>
                            <div className="dropdown-content">
                                <p>Plus de détails sur l'expérience professionnelle.</p>
                            </div>
                        </li>
                        <li className="dropdown">
                            <Link to="/projects">Projets</Link>
                            <div className="dropdown-content">
                                <p>Découvrir les projets réalisés.</p>
                            </div>
                        </li>
                        <li className="dropdown">
                            <Link to="/about">A propos</Link>
                            <div className="dropdown-content">
                                <p>En savoir plus sur moi.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navigation-btn">
                    <Link to="/contact">
                        <button className="button">
                            <span className='btn-icon'>
                                Prenez contact
                                <AiOutlineRight />
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="burger-menu" onClick={toggleSidebar}>
                    {/* <FaBarsStaggered /> */}
                    <HiMenu />
                </div>
                <div className={`overlay ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
                <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-content">
                        <AiOutlineClose className="close-icon" onClick={toggleSidebar} />
                        <ul>
                            <li >
                                <div className='submenu'>
                                    <a href="#experience" onClick={toggleSidebar}>Expérience</a>
                                    <AiOutlineDown className="submenu-icon" onClick={() => toggleSubMenu('experience')} />
                                </div>
                                {openSubMenu === 'experience' && (
                                    <div className="submenu-content">
                                        <p>Détails de l'expérience...</p>
                                    </div>
                                )}
                            </li>
                            <li>
                                <div className='submenu'>
                                    <a href="#projets" onClick={toggleSidebar}>Projets</a>
                                    <AiOutlineDown className="submenu-icon" onClick={() => toggleSubMenu('projets')} />
                                </div>
                                {openSubMenu === 'projets' && (
                                    <div className="submenu-content">
                                        <p>Détails des projets...</p>
                                    </div>
                                )}
                            </li>
                            <li>
                                <div className='submenu'>
                                    <a href="#apropos" onClick={toggleSidebar}>À propos</a>
                                    <AiOutlineDown className="submenu-icon" onClick={() => toggleSubMenu('apropos')} />
                                </div>
                                {openSubMenu === 'apropos' && (
                                    <div className="submenu-content">
                                        <p>Détails à propos...</p>
                                    </div>
                                )}
                            </li>
                            <li className='submenu'>
                                <a href="#contact" onClick={toggleSidebar}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
