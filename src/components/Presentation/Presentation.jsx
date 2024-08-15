import React from 'react'
import './Presentation.css'
import { adaptation, communication, job } from '../../assets/assets'

const Presentation = () => {
    return (
        <div className='presentation'>
            <div className="presentation-item">
                <img src={job} alt="" />
                <h4 className="presentation-item-title">Approche de Travail</h4>
                <p>Je m'efforce de fournir des solutions optimisées pour la performance et l'expérience utilisateur.</p>
            </div>
            <div className="presentation-item center-item">
                <img src={adaptation} alt="" />
                <h4 className="presentation-item-title">Personnalisation</h4>
                <p>Je m'adapte aux besoins spécifiques de chaque projet pour offrir des résultats sur mesure.</p>
            </div>
            <div className="presentation-item right-item">
                <img src={communication} alt="" />
                <h4 className="presentation-item-title">Communication</h4>
                <p>Disponible et réactif, je suis à l'écoute de mes clients pour une collaboration fluide à tout moment.</p>
            </div>
        </div >
    )
}

export default Presentation
