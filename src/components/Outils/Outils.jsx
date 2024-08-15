import React from 'react'
import './Outils.css'
import { firebase, git, mysql, react, redux, vscode, webpack } from '../../assets/assets'

const Outils = () => {
    return (
        <div className='outils'>
            <img src={vscode} alt="" />
            <img src={react} alt="" />
            <img src={redux} alt="" />
            <img src={webpack} alt="" />
            <img src={git} alt="" />
            <img src={firebase} alt="" />
            <img src={mysql} alt="" />
        </div>
    )
}

export default Outils
