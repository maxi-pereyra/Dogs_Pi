const getDogs = require('../Controllers/getDogs')

const handlerGetDogs = async (req,res) => {
    try {
        const dogs = await getDogs();
        return res.status(200).json(dogs)
    } catch (error) {
        return res.status(500).json({error:error.msg})
    }
}

module.exports = handlerGetDogs;