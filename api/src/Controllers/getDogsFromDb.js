const { Dogs , Temperaments } = require('../db')

const getDogsDb = async () => {
    
    const dogsDb = await Dogs.findAll({
        include: [
            {
                model: Temperaments,
                attributes: ['temperament'],
                through: { attributes: [] }// omite columnas intermedias
            },
        ],
    });
    
    
    return dogsDb.map(dog => {
        let aux = dog.Temperaments.map(ele => ele.temperament)
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            image: dog.image,
            temperament: aux.join(",")
        }
    });
}

module.exports = getDogsDb;