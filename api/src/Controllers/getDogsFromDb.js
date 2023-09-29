const {Dogs } = require('../db')

const getDogsDb = async () => {
    const allDogs = await Dogs.findAll();

    return allDogs.map(dog => {
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