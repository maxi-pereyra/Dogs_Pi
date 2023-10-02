const {Dogs , Temperaments} = require('../db');
const axios = require('axios')
require('dotenv').config()

const apikey = process.env.API_KEY;

const URL = 'https://api.thedogapi.com/v1/breeds'


const getDogsById = async (id) => {
    console.log(typeof id , id)
    console.log(isNaN(id))
    if(!isNaN(id)){
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

    
    const response = await axios(`${URL}?api_key=${apikey}`);
    
    const dogApi = response.data.map((dogData) => {
        
        
        return {
            id: dogData.id,
            name: dogData.name,
            weight: dogData.weight?.metric,
            height: dogData.height?.metric,
            life_span: dogData.life_span,
            image: dogData.image?.url,
            temperament: dogData.temperament
        }
        
    });
    
    const  raza =  dogApi?.filter( dog => ":"+dog.id == id);

    
    return raza;
}

module.exports = getDogsById;