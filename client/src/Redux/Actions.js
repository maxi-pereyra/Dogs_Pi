import axios from 'axios';
import { GET_ALL_DOGS ,
         GET_DOG_DETAIL ,
         GET_DOG_BY_NAME ,
         FILTER_BD ,
         GET_TEMPERAMENT_BD,
         SORT_BY_TEMPERAMENT,
         SORT_BY_ALFABETICO,
        SORT_BY_PESO,
        POST_DOG,
        CLEAN_DETAIL,
        DELETE_DOG,
        } from "./Actions-types"



export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`/dogs`)

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
           console.log("id detalle" , id)
            const { data } = await axios.get(`/dogs/${id}`)
           console.log("data" , data)

                const dog = {
                    id: data[0].id,
                    name: data[0].name,
                    weight: data[0].weight, 
                    height: data[0].height,
                    life_span: data[0].life_span,
                    image: data[0].image,
                    //dueño: data[0].dueño,
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
            const {data}  = await axios.get(`/name?name=${name}`);
       
            
            const dog = data.map(dogi => {
                return {
                    id: dogi.id,
                    name: dogi.name,
                    weight: dogi.weight,
                    height: dogi.height,
                    life_span: dogi.life_span,
                    image: dogi.image,
                    temperament: dogi.temperament
                };
            })

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
            const { data } = await axios.get(`/temperaments`);

            if(!data || data.length === 0) throw new Error("no se encontraron perros")
            
            
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

export const postDogs = (dogCreado) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`/dogs`,dogCreado);
            const dogCreate = response.data;
           
            dispatch({
                type: POST_DOG,
                payload: dogCreate
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const cleanDetail = () => {
    return async (disaptch) => {
        return disaptch({
            type: CLEAN_DETAIL,
        })
    }
}

export const deleteDog = (id) => {
    return async (disaptch) => {
        console.log(id)
        const {response} = await axios.delete(`/delete/${id}`);
        
        return disaptch({
            type: DELETE_DOG,
            payload: response.data
        })
    }
}
