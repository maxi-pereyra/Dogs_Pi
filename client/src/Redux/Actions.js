import axios from 'axios';
import { GET_ALL_DOGS , GET_DOG_DETAIL } from "./Actions-types"

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
                image: d.image
            }));
            return dispatch({type: GET_ALL_DOGS , payload: dog})
        } catch (error) {
            console.log(error)
        }
    }
}