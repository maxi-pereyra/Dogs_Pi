const getDogByName = require('../Controllers/getDogByName');

const handlerGetDogByName = async (req,res) => {
    try {
        const {name} = req.query;
        console.log(name)
        if(name){
            const dogsRaza = await getDogByName(name);
            return res.status(200).json(dogsRaza);
        }else return res.status(406).send("no hay dato claro")

    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = handlerGetDogByName;