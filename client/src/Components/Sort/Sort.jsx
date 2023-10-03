import React from 'react'
import { useEffect} from 'react';
import { filterBdApi , getAllTemperament, sortByTemperament , SortByAlfabetic , sortByPeso } from '../../Redux/Actions';
import { useSelector , useDispatch } from 'react-redux';



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
    <div>
        <select onChange={handlerFiltered}>
            Origen
            <option value="all">Todos</option>
            <option value="api">Nativos</option>
            <option value="bd">Creados</option>
        </select>

        <select onChange={handlerSortTemperament}>
            Temperamentos
            <option value="" disabled> Temperamento </option>  
            {
                temperaments?.map(ele => <option key={ele} value={ele}>
                    {ele}
                </option>)
            }
        </select>

        <select onChange={handlerSortByAlfabetic}>
            Alfabeticamente
            <option value="" disabled> Alfabeticamente </option>
            <option value="ascendente">A - Z </option>
            <option value="descendente">Z - A </option>
        </select>

        <select onChange={handlerSortByPeso}>
            Peso
            <option value="" disabled> Peso </option>
            <option value="ascendente">A - Z</option>
            <option value="descendente">Z - A</option>
        </select>
    </div>
  )
}

export default Sort