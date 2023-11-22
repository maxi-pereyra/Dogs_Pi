const postDog = require('../Controllers/postDog')

const handlerPost = async (req,res) => {
    try {
        const {
            image,
            name,
            height,
            weight,
            life_span,
            dueño,
            temperament
        } = req.body;
        const response = await postDog( image,
            name,
            height,
            weight,
            life_span,
            dueño,
            temperament);
        res.status(200).json(response)
        } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerPost;