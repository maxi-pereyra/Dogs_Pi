const axios = require('axios')
const {Dogs} = require('../db')
const { Op } = require('sequelize')

const apiKey = process.env.API_KEY;

const getDogByName = async (name) => {
    
    let response = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${apiKey}`)
    
    let dogApi = response.data;

    let dogDb = await Dogs.findAll({
        where:{
            name:{
                [Op.iLike]: `%${name}%`
            }
        }
    })

    const responseDog =  [{
        id: dogApi[0].id,
        name: dogApi[0].name,
        weight: dogApi[0].weight?.metric,
        height: dogApi[0].height?.metric,
        life_span: dogApi[0].life_span,
        image:dogApi[0].image?.url,
        //temperament: dogApi[0].temperament,
    }]
    console.log(responseDog)
    
    let allSearchedDogs = [...dogDb, ...responseDog]
     if (allSearchedDogs.length === 0) {
         throw new Error('No hay perros con ese nombre')
        } 
        
        return allSearchedDogs;
        
    }
    
    module.exports = getDogByName;

    
    /* const getDogByName = async (name) => {
        let nameArray = name.toLowerCase().split(' ');
    
        for(let i = 0 ; i<nameArray.length ; i++){
            nameArray[i] = nameArray[i].charArt(0).toUpperCase() + nameArray[i].slice(1); 
        }
    
        let capitalName = nameArray.join('');
    
        const DogsApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`)).data;
    
        const dogClean = DogsApi.map(dog =>{
            return {
                id: dog.id,
                name: dog.name,
                Image: dog.image.url,
                weight: dogData.weight.metric,
                height: dogData.height.metric,
                life_span: dogData.life_span,
    
            }
        }) 
    
        const dogFilter = dogClean.filter((dog) => dog.name === capitalName);
    
        const dogNameDb = await Dogs.findAll({where: {name: name}});
    
        if(dogFilter.length === 0 && dogNameDb.length === 0 ) throw new Error("no se encontro raza de perro")
    
        return [...dogFilter , ...dogNameDb]
    } */