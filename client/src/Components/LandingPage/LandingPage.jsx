import React from 'react'
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={style.contains}>
      <div>
        <h1>Bienvenidos!!</h1>
        <Link to={'/home'}>
            <button className={style.boton_inicio}>inicio</button>
        </Link>

      </div> 
    </div>
  )
}

export default LandingPage