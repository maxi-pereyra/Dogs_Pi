import React from 'react'
import { Link } from 'react-router-dom';
import { postDogs } from '../../Redux/Actions';
import { useSelector , useDispatch } from 'react-redux';
import { useState ,useEffect } from 'react';
import { getAllTemperament } from '../../Redux/Actions';
import validacionFormulario from '../../utils/validacionFormulario';
import style from './Form.module.css';

const Form = () => {

  const dispatch = useDispatch();
  const temperaments = useSelector(state => state.temperament);
  const [dog,setDog] = useState({
    image:'',
    name:'',
    heightMin:0,
    heightMax:0,
    weightMin:0,
    weightMax:0,
    life_span_min:0,
    life_span_max:0,
    temperament:[]
  });
  
  const [error,setError] = useState({ 
    image:'',
    name:'*El nombre es reqerido',
    heightMin:"*La altura es requerida",
    heightMax:"*La altura es requerida",
    weightMin:"*El peso es requerida",
    weightMax:"*El peso es requerida",
    life_span_min:"*La esperanza de vida es requerida",
    life_span_max:"*La esperanza de vida es requerida",
    temperament:"*Es necesario al menos un temperamento"
  })
  
  const [disableHeight,setDisableHeight] = useState(true)
  const [disableWeight,setDisableWeight] = useState(true)
  ///////////
  const handlerChange = (event) => {
    
    if(event.target.name==='heightMin') setDisableHeight(false)
    if(event.target.name==='weightMin') setDisableWeight(false)

    if(event.target.name === 'temperament'){
      
      setDog({
        ...dog,
        [event.target.name]: [...dog.temperament,event.target.value]
      })
    }else{
      setDog({
        ...dog,
        [event.target.name]: event.target.value,
      })
    }
    
    setError(validacionFormulario({
      ...dog,
      [event.target.name]: event.target.value
    },error, event.target.name))
  }
  ////////
  const removeTemperament = () => {
    setDog({
      ...dog, temperament : []
    })
  }

  /////////
  const handlerSubmit = (event) =>{
    event.preventDefault()
    let dogOk = {
      image:dog.image || '',
      name:dog.name,
      height: `${dog.heightMin} - ${dog.heightMax}` ,
      weight:`${dog.weightMin} - ${dog.weightMax}` ,
      life_span: `${dog.life_span_min} - ${dog.life_span_max}`,
      temperament: dog.temperament    
  }; 
    dispatch(postDogs(dogOk)).then(()=>{
      alert(`El perro se creo exitosamente`)
    })
    .catch(()=>{
      alert(`no se pudo crear el perro. Intentelo nuevamente`)
    })
  }
  //////
  const disableFunction = () => {
    let disableAux = true;
    for ( let err in error){
      if(error[err] === '') disableAux=false;
      else {
        disableAux=true;
        break;
      }
    }
    return disableAux;
  }
  //////
  useEffect(()=>{
    dispatch(getAllTemperament())     
    
    },[dispatch])
  ///////
  return (
    <div className={style.container}>
      <form onSubmit={handlerSubmit}>
  
        <h2>Crea tu perro</h2>

        <div className={style.nameCont}>
          <label  >Raza:</label>
          <input onChange={handlerChange} type="text"
           placeholder="ingresa la raza" name='name'/>
           {<p className={style.errors}>{error.name}</p>}
        </div>

        <div className={style.imageCont}>
          <label >Imagen:</label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese url de la imagen" name='image' />
          
        </div>

        <div className={style.heightCont}>
          <label >Altura Min:</label>
          <input onChange={handlerChange}  type="number" 
          placeholder="ingrese altura min " name='heightMin' />
           { <p className={style.errors}>{error.heightMin}</p>}
<br />
          <label >Altura Max:</label>
          <input onChange={handlerChange}  type="number" 
          placeholder="ingrese altura max" name='heightMax' 
          disabled={disableHeight} />
          { <p className={style.errors}>{error.heightMax}</p>}
        </div>

        <div className={style.weightCont}>
          <label >Peso Min:</label>
          <input onChange={handlerChange} type="number" 
          placeholder="ingrese ingrese peso min " name='weightMin' />
          {<p className={style.errors}>{error.weightMin}</p>}
<br />
          <label >Peso Max:</label>
          <input onChange={handlerChange} type="number" 
          placeholder="ingrese ingrese peso max " name='weightMax'
          disabled={disableWeight} />
          { <p className={style.errors}>{error.weightMax}</p>}
        </div>

        <div className={style.life_spanCont}>
          <label >Rango de esperanza de vida entre: </label>
          <input onChange={handlerChange} type="number" 
           name='life_span_min' /> 
             { <p className={style.errors}>{error.life_span_min}</p>}
        </div>   
        
        <div className={style.life_spanCont}>
           <label >&</label>
           <input onChange={handlerChange} type="number" 
           name='life_span_max' /> 
             { <p className={style.errors}>{error.life_span_max}</p>}
        </div>

        <div className={style.temperamentCont}>
          <label >Temperametos:</label>
          <select onChange={handlerChange} name="temperament" >
          {
            temperaments?.map((ele,index) => <option key={index} id={ele} value={ele}>
                    {ele}
                </option>)
            }
          </select>
            {<p className={style.errors}>{error.temperament}</p>}
          {
            dog.temperament.map((e) => <div key={e} >
                                        <span id={e}>{e} </span>
                                        </div>)
          }
          { 
            dog.temperament.length===0 ? <p></p> :
            <button className={style.button} onClick={removeTemperament} name='temperament' type='button' > clean </button> 
          }

        </div>

        <hr />
        <button className={` ${style.createBtn} ${disableFunction() ? style.disabled : ''}`} disabled={disableFunction()} >Crear perro</button>

        
      </form>
      <br /><br /><br />
      <div className={style.btn_cnt}>
        <Link to={"/home"}>
          <button className={style.button}>Volver</button>
        </Link>
      </div>
    </div>
  )
}

export default Form