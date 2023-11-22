const {Dogs , Temperaments} = require('../db')
const { Op } = require('sequelize')

const postDog = async (image,name,height,weight,life_span,dueño,temperament) => {
    const newDog = await Dogs.create({
        image,
        name,
        height,
        weight,
        life_span,
        dueño,
    });

    
    temperament.forEach(async (t) => {
        let temperamentsDb = await Temperaments.findAll({ where: { temperament: t } });
     
        await newDog.addTemperaments(temperamentsDb);
      });
    
    
    return ({
        id: newDog.id,
        image: newDog.image,
        name: newDog.name,
        height: newDog.height,
        weight: newDog.weight,
        life_span: newDog.life_span,
        dueño: newDog.dueño,
        temperament: temperament 
    })

}

module.exports = postDog

/* {
    "name": "Azawakh",
    "weight": "3 - 6",
    "height": "23 - 29",
    "life_span": "10 - 12 years",
    "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    "temperaments":["malo","bueno"]
  
}

 */