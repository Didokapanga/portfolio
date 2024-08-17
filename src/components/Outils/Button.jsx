import React, { useEffect, useState } from 'react';
import './Outils.css';
import { BsChatTextFill } from 'react-icons/bs';
import { FaChevronUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Button = () => {
    const [showButton, setShowButton] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    // const [sticky, setSticky] = useState(false);
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    // const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        toggleSubMenu()
    };

    // const toggleSubMenu = (menu) => {
    //     setOpenSubMenu(openSubMenu === menu ? null : menu);
    // };

    useEffect(() => {
        const handleScroll = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='button-outils'>
                <button className="button-up" onClick={() => window.scrollTo(0, 0)} style={{ display: showButton ? 'block' : 'none' }}><FaChevronUp /></button>
                <button className="button-chat" onClick={() => setShowOverlay(!showOverlay)}><BsChatTextFill /></button>
            </div>
            <div className={`overlay ${showOverlay ? 'open' : ''}`}>
                {/* Contenu de l'overlay */}
                <div className="button-close">
                    <span onClick={() => setShowOverlay(!showOverlay)}><AiOutlineClose /></span>
                </div>
                <div className="overlay-content">
                    <div className="button-content">
                        <h4>Me contacter</h4>
                        <div className="customer-container">
                            <button className="buttons"><span>appelez-moi</span> <span>0826569932</span></button>
                            <button className="buttons-chat-info"><span>Ecrivez-moi</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Button;