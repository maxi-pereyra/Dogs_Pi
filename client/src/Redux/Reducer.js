import { GET_ALL_DOGS ,
         GET_DOG_BY_NAME, 
         GET_DOG_DETAIL, 
         FILTER_BD,
         GET_TEMPERAMENT_BD,
        SORT_BY_TEMPERAMENT,
        SORT_BY_ALFABETICO, 
        SORT_BY_PESO,
        POST_DOG,
        CLEAN_DETAIL} from "./Actions-types";

const initialState = [
    {
        dogs: [],
        dogsCopy: [],
        temperament:[],
        detail: [],
        cleanDetail: null,
        dogCreado:null
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
        case GET_DOG_DETAIL:{
            return{
                ...state,
                detail: action.payload
            }
        }
        case GET_DOG_BY_NAME:{
            return{
                ...state,
                dogs: action.payload
            }
        }
        case FILTER_BD:{
            const copy = [...state.dogsCopy];
            if(action.payload === "api"){
                const apiDogs = copy.filter(element => typeof element.id ==='number')
                return{
                    ...state,
                    dogs: apiDogs
                }
            }else if( action.payload === "bd"){
                const dbDogs = copy.filter( element => typeof element.id === "string")
                return{
                    ...state,
                    dogs: dbDogs
                }
            }else if( action.payload === "all"){
                const getAllDogs = [...state.dogsCopy]
                return{
                    ...state,
                    dogs: getAllDogs
                }
            }
            break;
        }
        case GET_TEMPERAMENT_BD: {
            return {
                ...state,
                temperament: action.payload 
            }
        }
        case SORT_BY_TEMPERAMENT: {
            const copy = [...state.dogsCopy];
            
            const dogsClean = copy.map(dog => 
                {   
                    dog.temperament?.split(",")
                    for(let i=0 ; i < dog.temperament?.length ; i++ ){
                        dog.temperament[i].trim()
                    }
                    return{
                        id: dog.id,
                        name: dog.name,
                        weight: dog.weight,
                        height: dog.height,
                        life_span: dog.life_span,
                        image: dog.image,
                        temperament: dog.temperament
                    }
                })

            const dogsFiltered = dogsClean.filter(ele => ele.temperament?.includes(action.payload))   
            
            return{
                ...state,
                dogs: dogsFiltered
            }
        }

        case SORT_BY_ALFABETICO:{
                const copy = [...state.dogsCopy];
                const dogsOrderName = copy.sort((a,b)=>{
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if(action.payload === 'ascendente') return nameA.localeCompare(nameB)
                    else return nameB.localeCompare(nameA)
                }) 
                return {
                    ...state,
                    dogs: dogsOrderName
                }  
        }
        case SORT_BY_PESO:{
            const copy = [...state.dogsCopy];
            const orderPeso = copy.map(dog => {
                let pesoAux = dog.weight.split("-");
                console.log(pesoAux)
                /* pesoAux[0] = parseInt(pesoAux[0]); */
                const pesoMax = parseInt(pesoAux[pesoAux.length-1])
                console.log(pesoMax)
                return {
                    id: dog.id,
                    name: dog.name,
                    weight: dog.weight,
                    height: dog.height,
                    life_span: dog.life_span,
                    image: dog.image,
                    temperament: dog.temperament,
                    aux: pesoMax
                }
            })
            orderPeso.sort((a,b)=>{
                if(action.payload==='ascendente'){
                    return a.aux - b.aux;  
                } 
                else {
                    return b.aux - a.aux;
                } 
            }) 
            return{
                ...state,
                dogs: orderPeso
            }
        }
        case POST_DOG: {
                
                return{
                    ...state,
                    dogs: [...state.dogsCopy,action.payload],
                    dogCreado: action.payload
                } 
        }        
        case CLEAN_DETAIL:{
            return{
                ...state,
                detail: null
            }
        }
        default:
            return {...state}
    }
}

export default reducer;