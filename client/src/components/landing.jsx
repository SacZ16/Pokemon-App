import React from 'react'
import { Link } from 'react-router-dom';
import style from './landing.module.css'

function Landing(){   

    return (
        <div className={style.fondo}>
                <div className={style.logo}></div>
            <Link to='/1' className={style.text2}><h1 className={style.text2}>BIENVENIDO</h1>
            </Link>        
        </div>
    )
}

export default Landing