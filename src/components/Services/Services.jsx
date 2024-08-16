import React from 'react'
import "./Services.css"
import { HiPuzzle, HiTemplate } from 'react-icons/hi'
import { BsRocketTakeoff } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='services'>
            <div className="over-gradiant">
                <div className="services-title">
                    <h2>Mes <span>expertises</span></h2>
                    <p className='secondary-text'>Explorez mes services professionnels de développement web et mobile, où chaque projet est conçu sur mesure pour offrir des solutions innovantes, performantes et adaptées à vos besoins spécifiques. </p>
                    <button className="buttons-hero"><span>Voir plus</span></button>
                </div>
                <div className="services-item">
                    <div className="service-card">
                        <span className="service-icon"><HiTemplate /></span>
                        <h4>Création de Sites Web Personnalisés</h4>
                        <p>Je conçois et développe des sites web adaptés à vos besoins.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon"><HiPuzzle /></span>
                        <h4>Conception d'Interfaces Utilisateur Intuitives</h4>
                        <p>J'élabore des interfaces utilisateur élégantes.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon"><BsRocketTakeoff /></span>
                        <h4>Optimisation de la Vitesse de Chargement</h4>
                        <p>J'optimise votre site web pour des temps de chargement rapides.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon"><FaReact /></span>
                        <h4>Applications Web et Mobile Dynamiques</h4>
                        <p> Je développe des applications web et mobiles interactives.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
