import React from 'react'
import Card from '../Card/Card'

const Cards = ({dogs}) => {
  return (
    <div>
      {
        dogs?.map(({id,name,weight,height,life_span,image}) => {
          return (
            <Card 
            key={id}
            id={id}
            name={name}
            weight={weight}
            height={height}
            life_span={life_span}
            image={image}
            />
          )
        })
      }
    </div>
  )
}

export default Cards