import React, { useEffect, useState } from 'react'
import './Outils.css'
import { BsChatTextFill } from 'react-icons/bs'
import { FaChevronUp } from 'react-icons/fa'

const Button = () => {
    const [showButton, setShowButton] = useState(false);

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
        <div className='button-outils'>
            < button className="button-up" onClick={() => window.scrollTo(0, 0)} style={{ display: showButton ? 'block' : 'none' }}><FaChevronUp /></button>
            <button className="button-chat"><BsChatTextFill /></button>
        </div>
    )
}

export default Button
