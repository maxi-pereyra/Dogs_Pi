const {Dogs , Temperaments} = require('../db')
const { Op } = require('sequelize')

const postDog = async (image,name,height,weight,life_span,temperament) => {
    const newDog = await Dogs.create({
        image,
        name,
        height,
        weight,
        life_span,
    });

    console.log(temperament)
    temperament.forEach(async (t) => {
        let temperamentsDb = await Temperaments.findAll({ where: { temperament: t } });
        console.log(temperamentsDb)
        await newDog.addTemperaments(temperamentsDb);
      });
    
    /* const dogTemperament = await Temperaments.findAll({
        where:{
            temperament:{
                    [Op.in]: Temperaments.map((temperament)=> temperaments )
            }
        }
    })
    await newDog.addPoderes(dogTemperament); */

    return newDog

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