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
  const dogCreate = useSelector(state => state.dogCreate)
  const [dog,setDog] = useState({
    image:'',
    name:'',
    height:'',
    weight:'',
    life_span:'',
    temperament:[]
  });
  
  const [error,setError] = useState({
    image:'',
    name:'',
    height:'',
    weight:'',
    life_span:'',
    temperament:[]
  })
  ///////////
  const handlerChange = (event) => {
    
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
    }, event.target.name))
  }
  ////////
  const removeTemperament = (event) => {
  
    setDog({
      ...dog,
      [event.target.name]: [...dog[event.target.name].filter(x=>x!==event.target.id)]
    })
  }

  /////////
  const handlerSubmit = (event) =>{
    event.preventDefault()
    dispatch(postDogs(dog)).then(()=>{
      alert(`El perro se creo exitosamente`)
    })
    .catch(()=>{
      alert(`no se pudo crear el perro. Intentelo nuevamente`)
    })
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
           {<label className='errores'>{error.name}</label>}
        </div>

        <div>
          <label >Imagen:</label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese url de la imagen" name='image' />
           {<label className='errores'>{error.image}</label>}
        </div>

        <div>
          <label >Altura:</label>
          <input onChange={handlerChange}  type="text" 
          placeholder="ingrese altura min y max" name='height' />
           {<label className='errores'>{error.height}</label>}
        </div>

        <div>
          <label >Peso:</label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese ingrese rango de peso " name='weight' />
           {<label className='errores'>{error.weight}</label>}
        </div>

        <div>
          <label >Estimado de vida: </label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese estimado de vida" name='life_span' />
           {error.life_span && <p>{error.life_span}</p>}
        </div>

        <div>
          <label >Temperametos:</label>
          <select onChange={handlerChange} name="temperament" id=''>
          {
                temperaments?.map((ele,index) => <option key={index} value={ele}>
                    {ele}
                </option>)
            }
          </select>
          {
            dog.temperament.map((e) => <div>
                                        <span id={'temperament'}>{e} </span>
                                        <button onClick={removeTemperament} name='temperament'
                                        id={e} type='button' >   x </button>
                                        </div>)
          }
        </div>

        {/* <button type='submit'>enviar</button> */}
        <hr />
        <input type="submit" />
        
      </form>

      <div>
        <p>El perro {dogCreate?.name} fue creado con exito</p>
      </div>
      <Link to={"/home"}>
        <button>Volver</button>
      </Link>
    </div>
  )
}

export default Form