const {Temperaments} = require('../db');
const axios = require('axios')
const apikey = process.env.API_KEY;

const URL = 'https://api.thedogapi.com/v1/breeds';

const getTemperamentsDb = async () => {
    const TemperamentsDb = await Temperaments.findAll();
    if(!TemperamentsDb.length){
        const response = await axios.get(`${URL}?api_key=${apikey}`);
        const dogData = response.data;

        let temperament = [];
        
        const temperaments = dogData.map((el) =>
            el.temperament ? el.temperament.split(",") : ["Desconocida"]
        );

        for (let i = 0; i < temperaments.length; i++) {
            for (let j = 0; j < temperaments[i].length; j++) {
              temperament.push(temperaments[i][j].trim());
            }
        }

        for (let i = 0; i < temperament.length; i++) {
            if (temperament[i] !== "Desconocida") {
              Temperaments.findOrCreate({
                where: { temperament: temperament[i] },
              });
            }
          }
        
        return temperament;
    }
    return TemperamentsDb;
}

module.exports = getTemperamentsDb;