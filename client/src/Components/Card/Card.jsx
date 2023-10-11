import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Card.module.css';

const Card = ({id,name,weight,height,life_span,image,temperament}) => {
  return (
    <div className={style.container}>
      <h4 className={style.title}> {name}</h4>
        <div >
          <img src={image} alt={name} className={style.img}/>
        </div>
      <NavLink to={`/detail/:${id}`}>
        <button className={style.detailBtn}>Mas detalles</button>
      </NavLink>
      <div className={style.text_content}>
        {/* <h4>Altura: {height}</h4> */}
        <h4>Peso: {weight}</h4>
        {/* <h4>Esperanza de vida: {life_span}</h4> */}
        <h4>temperamentos: {temperament}</h4>
      </div>
    </div>
  )
}

export default Card