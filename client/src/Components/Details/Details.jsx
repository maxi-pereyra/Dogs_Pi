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
  
  return (
  <div className={style.conteiner}>
    
      <div  className={style.card_container}> 
      {
        dog?.name ? (
         <>
          <div className={style.image_sep}>
              <div className={style.image_content}>
                <img src={dog?.image} alt={dog?.name} className={style.image}/>
              </div>
          </div>
              <div className={style.detalle}>
                <h3 className={style.raza}>{dog?.name} <p>{dog?.id}</p></h3>
                <h4>Altura: {dog?.weight}</h4>
                <h4>Peso: {dog?.height}</h4>
                <h4>Esperanza de vida: {dog?.life_span}</h4>
                <h4>Temperamento: {dog?.temperament}</h4>
                <div>
                    <Link to='/home'>
                      <button className={style.boton}>Volver</button>
                    </Link>
                </div> 
              </div>
         </> 
        ) : (<div className={style.loading}>Loading...</div>)
      }
      </div>
  </div>
  )
}

export default Details