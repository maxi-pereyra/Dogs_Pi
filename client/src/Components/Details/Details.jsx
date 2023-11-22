import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getDogById , cleanDetail , deleteDog} from '../../Redux/Actions';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const res = useSelector(state => state.response)
  const [dogCreated , setDogCreated] = useState(false)

  const handlerDelete = () => {
    dispatch(deleteDog(id.slice(1)))
    console.log(id)
  }
  console.log(res)
  useEffect(() => {
    dispatch(getDogById(id.slice(1)))
    return () => {
      dispatch(cleanDetail())
    }
  },[dispatch,id])

  const dog = useSelector(state => state.detail)
  console.log("detalle_dog" , dog)
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
                <p className={style.raza}>{dog?.name} ({dog?.id})</p> 
                <h4>Altura: {dog?.weight}</h4>
                <h4>Peso: {dog?.height}</h4>
                <h4>Esperanza de vida: {dog?.life_span}</h4>
                <h4>Temperamento: {dog?.temperament}</h4>
                {/* <h4>dueño: {dog?.dueño}</h4> */}
                <div>
                    <Link to='/home'>
                      <Button>Volver</Button>
                    </Link>
                    <div>
                      {
                        id.length > 20 ? (
                            <div>
                              <Button onClick={handlerDelete}>delete</Button>
                            </div>
                        ) : (
                          <p>API</p>
                          )
                      }
                    </div>
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