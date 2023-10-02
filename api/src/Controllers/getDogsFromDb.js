const { Dogs } = require('../db')

const getDogsDb = async () => {
    
    const dogsDb = await Dogs.findAll();
    
    //if(!dogsDb.length) throw new Error("No se encontraron perros en la base de datos ");
    
    return dogsDb.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight.metric,
            height: dog.height.metric,
            life_span: dog.life_span,
            image: dog.image
        }
    });
}

module.exports = getDogsDb;