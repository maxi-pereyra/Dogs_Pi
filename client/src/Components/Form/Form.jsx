import React from 'react'
import { Link } from 'react-router-dom';
import { postDogs } from '../../Redux/Actions';
import { useSelector , useDispatch } from 'react-redux';
import { useState ,useEffect } from 'react';
import { getAllTemperament } from '../../Redux/Actions';
import validacionFormulario from '../../utils/validacionFormulario';


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
    <div>Form
      <form onSubmit={handlerSubmit}>
        <h2>Crea tu perro</h2>

        <div>
          <label  >Raza:</label>
          <input onChange={handlerChange} type="text"
           placeholder="ingresa la raza" name='name'/>
           {<p>{error.name}</p>}
        </div>

        <div>
          <label >Imagen:</label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese url de la imagen" name='image' />
          
        </div>

        <div>
          <label >Altura Min:</label>
          <input onChange={handlerChange}  type="text" 
          placeholder="ingrese altura min " name='heightMin' />
           { <p>{error.heightMin}</p>}
<br />
          <label >Altura Max:</label>
          <input onChange={handlerChange}  type="text" 
          placeholder="ingrese altura max" name='heightMax' 
          disabled={disableHeight} />
          { <p>{error.heightMax}</p>}
        </div>

        <div>
          <label >Peso Min:</label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese ingrese peso min " name='weightMin' />
          {<p>{error.weightMin}</p>}
<br />
          <label >Peso Max:</label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese ingrese peso max " name='weightMax'
          disabled={disableWeight} />
          { <p>{error.weightMax}</p>}
        </div>

        <div>
          <label >Rango de esperanza de vida entre: </label>
          <input onChange={handlerChange} type="text" 
           name='life_span_min' /> 
           
           <input onChange={handlerChange} type="text" 
           name='life_span_max' /> 
        </div>

        <div>
          <label >Temperametos:</label>
          <select onChange={handlerChange} name="temperament" >
          {
                temperaments?.map((ele,index) => <option key={index} id={ele} value={ele}>
                    {ele}
                </option>)
            }
          </select>
          {
            dog.temperament.map((e) => <div key={e} >
                                        <span id={e}>{e} </span>
                                        </div>)
          }
          { 
            dog.temperament.length===0 ? <p></p> :
            <button  onClick={removeTemperament} name='temperament' type='button' > clean </button> 
          }

            {<p>{error.temperament}</p>}
        </div>

        <hr />
        <input type="submit" disabled={disableFunction()}/>
        
      </form>
      <br /><br /><br />
      <Link to={"/home"}>
        <button>Volver</button>
      </Link>
    </div>
  )
}

export default Form