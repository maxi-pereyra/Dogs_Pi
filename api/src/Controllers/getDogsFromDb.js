const { Dogs , Temperaments } = require('../db')

const getDogsDb = async () => {
    
    //const dogsDb = await Dogs.findAll();
    const dogsDb = await Dogs.findAll({
        include: [
            {
                model: Temperaments,
                attributes: ['temperament'],
                through: { attributes: [] }// omite columnas intermedias
            },
        ],
    });
    
    if(!dogsDb.length) throw new Error("No se encontraron perros en la base de datos ");
    //console.log("union",dogsDb[0].Temperaments[0].temperament)

    
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