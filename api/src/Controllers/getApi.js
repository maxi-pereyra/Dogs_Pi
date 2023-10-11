const axios = require('axios');
require('dotenv').config()

const apikey = process.env.API_KEY;

const URL = 'https://api.thedogapi.com/v1/breeds'
const getApi = async () => {

        const response = await axios(`${URL}?api_key=${apikey}`);
      
        const dogApi = response.data.map((dogData) => {

            return {
                id: dogData.id,
                name: dogData.name,
                weight: dogData.weight.metric,
                height: dogData.height.metric,
                life_span: dogData.life_span,
                image: dogData.image.url,
                temperament: dogData.temperament
            }

        });

        return dogApi;
}

module.exports = getApi;