const getDogByName = require('../Controllers/getDogByName');

const handlerGetDogByName = async (req,res) => {
    try {
        const {name} = req.query;
            const dogsRaza = await getDogByName(name);
            return res.status(200).json(dogsRaza);
      
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = handlerGetDogByName;