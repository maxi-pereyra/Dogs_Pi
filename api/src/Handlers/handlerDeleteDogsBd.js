const deleteDogsBd = require('../Controllers/deleteDogsBd');

const handlerDeleteDogsBd = async (req,res) => {
    const {id} = req.params;

    try {
        const response = await deleteDogsBd(id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerDeleteDogsBd;