import React from 'react'
import { useEffect} from 'react';
import { filterBdApi , getAllTemperament, sortByTemperament , SortByAlfabetic , sortByPeso } from '../../Redux/Actions';
import { useSelector , useDispatch } from 'react-redux';
import style from './Sort.module.css'
import { Form } from 'react-bootstrap';

const Sort = () => {

    const dispatch = useDispatch();
//    const dogs = useSelector(state => state.dogs)
    const temperaments = useSelector(state => state.temperament)

    const handlerFiltered = (event) => {
        const filterOrigin = event.target.value;
        dispatch(filterBdApi(filterOrigin))
    }

    const handlerSortTemperament = (event) => {
        const filterTemperament = event.target.value;
        dispatch(sortByTemperament(filterTemperament))
    }
    
    const handlerSortByAlfabetic = (event) => {
        const orderAlfabetic = event.target.value; 
        dispatch(SortByAlfabetic(orderAlfabetic))
    }

    const handlerSortByPeso = (event) => {
        const orderPeso = event.target.value;
        dispatch(sortByPeso(orderPeso))
    }

    useEffect(()=>{
    dispatch(getAllTemperament())     
        
    },[dispatch])

    
  return (
    <Form >          
        <Form.Group controlId="formOrigen">
            <Form.Select as="select" defaultValue="Origen"  onChange={handlerFiltered}>
                <option value="Origen" disabled>Origen</option>
                <option value="all">Todos</option>
                <option value="api">Nativos</option>
                <option value="bd">Creados</option>
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formTemperamento">
                <Form.Select as="select" defaultValue="Temperamento"  onChange={handlerSortTemperament}>
                <option value="Temperamento" disabled>Temperamento</option>
                {temperaments?.map(ele => (
                    <option key={ele} value={ele}>
                    {ele}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formAlfabeticamente">
            <Form.Select as="select" defaultValue="Alfabeticamente" onChange={handlerSortByAlfabetic}>
            <option value="Alfabeticamente" disabled>Alfabeticamente</option>
            <option value="ascendente">A - Z</option>
            <option value="descendente">Z - A</option>
            </Form.Select>
        </Form.Group>

        <Form.Group controlId="formPeso">
            <Form.Select as="select" defaultValue="Peso" onChange={handlerSortByPeso}>
            <option value="Peso" disabled>Peso</option>
            <option value="ascendente">A - Z</option>
            <option value="descendente">Z - A</option>
            </Form.Select>
        </Form.Group>
    </Form>
  )
}

export default Sort