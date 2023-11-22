const {Dogs , Temperaments} = require('../db');
const axios = require('axios')
require('dotenv').config()

const apikey = process.env.API_KEY;

const URL = 'https://api.thedogapi.com/v1/breeds'


const getDogsById = async (id) => {

    let esUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
   
    if(esUUID){
        const dogsDb = await Dogs.findByPk(id, {include:[Temperaments]});
        
        console.log("detalle", dogsDb)
        if(!dogsDb) throw new Error("no se encontraron perror en la base de datos")
        
        //const dogId = dogsDb.ToJSON();//garantiza automáticamente que las instancias se editarán JSON.stringify
        const temperamentAux = dogsDb.Temperaments.map(ele => ele.temperament)
        return [{
            id: dogsDb.id,
            name: dogsDb.name,
            weight: dogsDb.weight,
            height: dogsDb.height,
            life_span: dogsDb.life_span,
            temperament: temperamentAux.join(","),
            dueño: dogsDb.dueño,
            image: dogsDb.image
        }]
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
    
    const  raza =  dogApi?.filter( dog => dog.id == id);

    
    return raza;
}

module.exports = getDogsById;