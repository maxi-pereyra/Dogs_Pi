import React from 'react';
import {NavLink} from "react-router-dom";

const Card = ({id,name,weight,height,life_span,image}) => {
  return (
    <div>
      <h4>Raza: {name}</h4>
      <NavLink to={`/detail/:${id}`}>
        <div >
          <img src={image} alt={name}/>
        </div>
      </NavLink>
      <h4>Altura: {weight}</h4>
      <h4>Peso: {height}</h4>
      <h4>Esperanza de vida: {life_span}</h4>
    </div>
  )
}

export default Card