import React from 'react'
import { Link } from 'react-router-dom';
import { postDogs } from '../../Redux/Actions';
import { useSelector , useDispatch } from 'react-redux';
import { useState ,useEffect } from 'react';
import { getAllTemperament } from '../../Redux/Actions';
import validacionFormulario from '../../utils/validacionFormulario';
import style from './Form.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormCreate = () => {

  const dispatch = useDispatch();
  const temperaments = useSelector(state => state.temperament);
  const [dog,setDog] = useState({
    image:'',
    name:'',
    dueño:'',
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
    dueño: '',
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
      dueño: dog.dueño,
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
    <Form onSubmit={handlerSubmit}>
      <h2>Crea tu perro</h2>
      {/*  Raza  */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Raza </Form.Label>
        <Form.Control onChange={handlerChange} type="text"
           placeholder="ingresa la raza" name='name'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        {<p className={style.errors}>{error?.name}</p>}
        </Form.Text>
      </Form.Group>

      {/* Dueño */}
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dueño </Form.Label>
        <Form.Control  onChange={handlerChange} type="text"
           placeholder="ingresa el dueño" name='dueño'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        {<p className={style.errors}>{error?.dueño}</p>}
        </Form.Text>
      </Form.Group> */}

      {/* Imagen */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Imagen </Form.Label>
        <Form.Control  onChange={handlerChange} type="text" 
          placeholder="ingrese url de la imagen" name='image'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        {<p className={style.errors}>{error?.image}</p>}
        </Form.Text>
      </Form.Group>
      
      {/* Altura Min y Max */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Atura Min </Form.Label>
        <Form.Control  onChange={handlerChange}  type="number" 
          placeholder="ingrese altura min " name='heightMin'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        {<p className={style.errors}>{error?.heightMin}</p>}
        </Form.Text>

        <Form.Label>Atura Max </Form.Label>
        <Form.Control onChange={handlerChange}  type="number" 
          placeholder="ingrese altura max" name='heightMax' 
          disabled={disableHeight}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        {<p className={style.errors}>{error?.heightMax}</p>}
        </Form.Text>

      </Form.Group>
      
      {/* Peso Min y Max */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Peso Min </Form.Label>
        <Form.Control   onChange={handlerChange} type="number" 
          placeholder="ingrese ingrese peso min " name='weightMin'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        {<p className={style.errors}>{error?.weightMin}</p>}
        </Form.Text>

        <Form.Label>Peso</Form.Label>
        <Form.Control onChange={handlerChange} type="number" 
          placeholder="ingrese ingrese peso max " name='weightMax'
          disabled={disableWeight}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        {<p className={style.errors}>{error?.weightMax}</p>}
        </Form.Text>
      </Form.Group>

      {/* Esperanza de vida: */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rago de esperanza de cida desde: </Form.Label>
        <Form.Control onChange={handlerChange} type="number" 
           name='life_span_min'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          { <p className={style.errors}>{error?.life_span_min}</p>}
        </Form.Text>

        <Form.Label>& </Form.Label>
        <Form.Control onChange={handlerChange} type="number" 
           name='life_span_max'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          { <p className={style.errors}>{error?.life_span_max}</p>}
        </Form.Text>
      </Form.Group>

      {/* Temperamentos */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Temperamentos </Form.Label>
        <Form.Select  onChange={handlerChange} name="temperament">
        {
            temperaments?.map((ele,index) => <option key={index} id={ele} value={ele}>
                    {ele}
                </option>)
            }
        </Form.Select>
        {<p className={style.errors}>{error?.temperament}</p>}

        <div>
        {
            dog.temperament.map((e) => <div key={e} >
                                        <span id={e}>{e} </span>
                                        </div>)
          }
          { 
            dog.temperament.length===0 ? <p></p> :
            <Button onClick={removeTemperament} name='temperament' type='button' > clean </Button> 
          }
        </div>

        <hr />
        <Button className={` ${disableFunction() ? style.disabled : ''}`} disabled={disableFunction()} >Crear perro</Button>

        <br /><br /><br />
          <div className={style.btn_cnt}>
            <Link to={"/home"}>
              <Button>Volver</Button>
            </Link>
          </div>
      </Form.Group>
    </Form>

  )
}

export default FormCreate



{/* <div className={style.container}>
      <form onSubmit={handlerSubmit}>
  
        <h2>Crea tu perro</h2>

        <div className={style.nameCont}>
          <label  >Raza:</label>
          <input onChange={handlerChange} type="text"
           placeholder="ingresa la raza" name='name'/>
           {<p className={style.errors}>{error?.name}</p>}
        </div>

        <div className={style.nameCont}>
          <label  >Dueño:</label>
          <input onChange={handlerChange} type="text"
           placeholder="ingresa el dueño" name='dueño'/>
           {<p className={style.errors}>{error?.dueño}</p>}
        </div>

        <div className={style.imageCont}>
          <label >Imagen:</label>
          <input onChange={handlerChange} type="text" 
          placeholder="ingrese url de la imagen" name='image' />
            {<p className={style.errors}>{error?.image}</p>}
        </div>

        <div className={style.heightCont}>
          <label >Altura Min:</label>
          <input onChange={handlerChange}  type="number" 
          placeholder="ingrese altura min " name='heightMin' />
           { <p className={style.errors}>{error?.heightMin}</p>}
<br />
          <label >Altura Max:</label>
          <input onChange={handlerChange}  type="number" 
          placeholder="ingrese altura max" name='heightMax' 
          disabled={disableHeight} />
          { <p className={style.errors}>{error?.heightMax}</p>}
        </div>

        <div className={style.weightCont}>
          <label >Peso Min:</label>
          <input onChange={handlerChange} type="number" 
          placeholder="ingrese ingrese peso min " name='weightMin' />
          {<p className={style.errors}>{error?.weightMin}</p>}
<br />
          <label >Peso Max:</label>
          <input onChange={handlerChange} type="number" 
          placeholder="ingrese ingrese peso max " name='weightMax'
          disabled={disableWeight} />
          { <p className={style.errors}>{error?.weightMax}</p>}
        </div>

        <div className={style.life_spanCont}>
          <label >Rango de esperanza de vida entre: </label>
          <input onChange={handlerChange} type="number" 
           name='life_span_min' /> 
             { <p className={style.errors}>{error?.life_span_min}</p>}
        </div>   
        
        <div className={style.life_spanCont}>
           <label >&</label>
           <input onChange={handlerChange} type="number" 
           name='life_span_max' /> 
             { <p className={style.errors}>{error?.life_span_max}</p>}
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
            {<p className={style.errors}>{error?.temperament}</p>}
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
 */}