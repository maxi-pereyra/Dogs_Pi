const axios = require('axios')
const { Dogs , Temperaments} = require('../db')
const { Op } = require('sequelize')

const apiKey = process.env.API_KEY;

const getDogByName = async (name) => {
    
    let response = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${apiKey}`)
    
    let dogApi = response.data;

    let dogDb = await Dogs.findAll({
        where:{
            name:{
                [Op.like]: `%${name}%`,
            }
        },
        include: [
            {
                model: Temperaments,
                attributes: ['temperament'], 
                through: { attributes: [] }, 
              },
        ]
    })
    
    const dogDbLimpio = dogDb.map( dog => {
        const tempeAux = dog.Temperaments.map(ele => ele.temperament)
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            image: dog.image,
            temperament: tempeAux.join(",")
        }
    })
    
    let responseDog = []

    if(dogApi.length!=0){

        responseDog =  [{
            id: dogApi[0].id,
            name: dogApi[0].name,
            weight: dogApi[0].weight?.metric,
            height: dogApi[0].height?.metric,
            life_span: dogApi[0].life_span,
            image:dogApi[0].image?.url,
            temperament: dogApi[0].temperament,
        }]
        
    }
   
    let allSearchedDogs = [...dogDbLimpio, ...responseDog]
     if (allSearchedDogs.length === 0) {
         throw new Error('No hay perros con ese nombre')
        } 
        
        return allSearchedDogs;
        
    }
    
    module.exports = getDogByName;
