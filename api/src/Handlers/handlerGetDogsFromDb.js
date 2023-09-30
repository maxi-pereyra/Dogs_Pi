const getDogsFromDb = require('../Controllers/getDogsFromDb');

const handlerGetDogsFromDb = async (req,res) => {
    try {
        const response = await getDogsFromDb();
        return res.status(202).json(response)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = handlerGetDogsFromDb;