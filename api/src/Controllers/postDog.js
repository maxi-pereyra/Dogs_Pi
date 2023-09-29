const {Dogs , Temperaments} = require('../db')
const { Op } = require('sequelize')


const postDog = async (image,name,height,weight,life_span,temperaments) => {
    const newDog = await Dogs.create({
        image,
        name,
        height,
        weight,
        life_span,
        temperaments
    });

  /*   Temperaments.forEach(async (t) => {
        let temperamentsDb = await Temperaments.findAll({ where: { temperament: t } });
        await newDog.addPoderes(temperamentsDb);
      });
     */
    const dogTemperament = await Temperaments.findAll({
        where:{
            temperament:{
                    [Op.in]: Temperaments.map((temperament)=> temperament )
            }
        }
    })
    await newDog.addPoderes(dogTemperament);

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