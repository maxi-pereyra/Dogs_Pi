import React from 'react'
import { useEffect} from 'react';
import { filterBdApi , getAllTemperament, sortByTemperament } from '../../Redux/Actions';
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
    </div>
  )
}

export default Sort