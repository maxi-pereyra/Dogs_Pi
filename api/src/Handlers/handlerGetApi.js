const getApi = require('../Controllers/getApi')

const handlerGetApi = async (req,res) => {
    try {
        const dog = getApi();
        if(!dog) throw new Error ("no se econtraron perros");
        res.status(200).json(dog)
    } catch (error) {
        return res.status(500).json({error:error.msg})
    }
}

module.exports = handlerGetApi;