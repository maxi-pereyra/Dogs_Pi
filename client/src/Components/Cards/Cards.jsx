import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css';

const Cards = ({dogs}) => {
  return (
    <div className={style.cards}>
      {
        dogs?.map(({id,name,weight,height,life_span,image,temperament}) => {
          return (
            <Card 
            key={id}
            id={id}
            name={name}
            weight={weight}
            height={height}
            life_span={life_span}
            image={image}
            temperament={temperament}
            />
          )
        })
      }
    </div>
  )
}

export default Cards