import React from 'react'
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getDogById , cleanDetail } from '../../Redux/Actions';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
import { Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogById(id.slice(1)))
    return () => {
      dispatch(cleanDetail())
    }
  },[dispatch,id])

  const dog = useSelector(state => state.detail)
  
   console.log(dog)
  return (
    <div >
     {
      dog?.name ? (
        <div className={style.container}>
          <h4>Raza: {dog?.name}</h4>
            <div >
              <img src={dog?.image} alt={dog?.name} className={style.img}/>
            </div>
          <h4>Altura: {dog?.weight}</h4>
          <h4>Peso: {dog?.height}</h4>
          <h4>Esperanza de vida: {dog?.life_span}</h4>
          <h4>Temperamento: {dog?.temperament}</h4>
        </div>
      ) : (<div >Loading...</div>)
     }
     <Link to='/home'>
      <button>Volver</button>
     </Link>
    </div>
  )
}

export default Details