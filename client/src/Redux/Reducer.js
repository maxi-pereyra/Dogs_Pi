import { GET_ALL_DOGS} from "./Actions-types";

const initialState = [
    {
        dogs: [],
        dogsCopy: [],
        temperament:[],
    }
];

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DOGS:{
            return{
                ...state,
                dogs: action.payload,
                dogsCopy: [...action.payload]
            }
        }
        default:
            return {...state}
    }
}

export default reducer;