const {Dogs , Temperaments} = require('../db');
const axios = require('axios');
require('dotenv').config()

const apikey = process.env.API_KEY;

const URL = 'https://api.thedogapi.com/v1/breeds'


const getDogsById = async (id) => {
    if(isNaN(id)){
        const dogsDb = await Dogs.findByPk(id);
        if(!dogsDb) throw new Error("no se encontraron perror en la base de datos")
        
        const dogId = dogsDb.ToJSON();//garantiza automáticamente que las instancias se editarán JSON.stringify
        
        return {
            id: dogId.id,
            name: dogId.name,
            weight: dogId.weight.metric,
            height: dogId.height.metric,
            life_span: dogId.life_span,
            temperament: dogId.temperament,
            image: dogId.image
        }
    }

    const dogApi = (await axios.get(`${URL}/${id}?api_key=${apikey}`)).data ;
    if(!dogApi) throw new Error ("no se encontraron perros")
    //return dogApi;
    return{
        id: dogApi.id,
        name: dogApi.name,
        weight: dogApi.weight?.metric,
        height: dogApi.height?.metric,
        life_span: dogApi.life_span,
        image: `https://cdn2.thedogapi.com/images/${dogApi.reference_image_id}.jpg`,
        temperament: dogApi.temperament,
    }
}

module.exports = getDogsById;