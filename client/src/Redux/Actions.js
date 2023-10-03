import axios from 'axios';
import { GET_ALL_DOGS ,
         GET_DOG_DETAIL ,
         GET_DOG_BY_NAME ,
         FILTER_BD ,
         GET_TEMPERAMENT_BD,
         SORT_BY_TEMPERAMENT,
         SORT_BY_ALFABETICO,
        SORT_BY_PESO } from "./Actions-types"

const URL = 'http://localhost:3001';

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`${URL}/dogs`)

            if(!data || data.length === 0) throw new Error("No se encontraron perros");

            const dog = data?.map((d) => ({
                id: d.id,
                name: d.name,
                weight: d.weight,
                height: d.height,
                life_span: d.life_span,
                image: d.image,
                temperament: d.temperament
            }));
            return dispatch({type: GET_ALL_DOGS , payload: dog})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDogById =  (id) => {
    return async ( dispatch ) =>{
        try {
            const { data } = await axios.get(`http://localhost:3001/dogs/${id}`)
            
            //if(!data || data.length === 0 ) throw new Error(`no se encontro perro con id ${id}`)
                console.log(data)
                const dog = {
                    id: data[0].id,
                    name: data[0].name,
                    weight: data[0].weight,
                    height: data[0].height,
                    life_span: data[0].life_span,
                    image: data[0].image,
                    temperament: data[0].temperament
                }
                
            return dispatch({
                type: GET_DOG_DETAIL,
                payload: dog
            })

        } catch (error) {
            console.log(error)
        }
    }

}

export const getDogByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/name?name=${name}`);
            console.log(data)
            
            const dog = {
                id: data[0].id,
                name: data[0].name,
                weight: data[0].weight,
                height: data[0].height,
                life_span: data[0].life_span,
                image: data[0].image,
                temperament: data[0].temperament
            };
            console.log("data: ", dog)
            return dispatch({
                type: GET_DOG_BY_NAME,
                payload: dog
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterBdApi = (filterApiBd) => {
            return {
                type: FILTER_BD,
                payload: filterApiBd
            }
}

export const getAllTemperament = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/temperaments`);

            if(!data || data.length === 0) throw new Error("no se encontraron perros")
            
            console.log(data)
            return dispatch({
                type: GET_TEMPERAMENT_BD,
                payload: data
            });
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const sortByTemperament = (filterTemperament) => {
        return {
            type: SORT_BY_TEMPERAMENT ,
            payload: filterTemperament
        }
}

export const SortByAlfabetic = (orderAlfabetico) => {
        return {
            type: SORT_BY_ALFABETICO,
            payload: orderAlfabetico
        }
}

export const sortByPeso = (orderPeso) => {
    return{
        type: SORT_BY_PESO,
        payload: orderPeso
    }
}