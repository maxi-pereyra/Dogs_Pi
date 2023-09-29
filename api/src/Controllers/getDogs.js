const getApi = require('./getApi');
const getDb = require('./getDogsFromDb');

const  getDogs = async () => {
    const dogsApi = await getApi();
    const dogDb = await getDb();
    const allDogs = [...dogsApi , ...dogDb]
    if(allDogs.lenght === 0) throw new Error("No se encontraron perros") ;4
    return allDogs;
}

module.exports = getDogs;