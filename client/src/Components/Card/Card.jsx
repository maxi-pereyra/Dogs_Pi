import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Card.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const CardDog = ({id,name,weight,height,life_span,image,temperament}) => {
  return (
    <div className='container'>
      <Card style={{ width: '18rem' }}>
      <NavLink to={`/detail/:${id}`}>
        <Card.Img variant="top" src={image} />
      </NavLink>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Altura: {height}</ListGroup.Item>
            <ListGroup.Item>Peso: {weight}</ListGroup.Item>
            <ListGroup.Item>Esperanza de vida: {life_span}</ListGroup.Item>
          </ListGroup>
          <Card.Text>
          temperamentos: {temperament}
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <h4 className={style.title}> {name}</h4>
        <div >
          <img src={image} alt={name} className={style.img}/>
        </div>
      <NavLink to={`/detail/:${id}`}>
        <button className={style.detailBtn}>Mas detalles</button>
      </NavLink> */}
      {/* <div className={style.text_content}> */}
        {/* <h4>Altura: {height}</h4> */}
       {/*  <h4>Peso: {weight}</h4> */}
        {/* <h4>Esperanza de vida: {life_span}</h4> */}
       {/*  <h4>temperamentos: {temperament}</h4> */}
      {/* </div> */}
    </div>
  )
}

export default CardDog