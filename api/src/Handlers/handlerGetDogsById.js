const getDogsById = require('../Controllers/getDogsById');

const handlerGetDogsById = async (req,res) => {
    try {
        const {id} = req.params;
        const dogResponse = await getDogsById(id);
        return res.status(200).json(dogResponse);
    } catch (error) {
        return res.status(400).json({error: error.menssage})
    }
}

module.exports = handlerGetDogsById;