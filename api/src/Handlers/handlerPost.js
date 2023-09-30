const postDog = require('../Controllers/postDog')

const handlerPost = async (req,res) => {
    try {
        const {
            image,
            name,
            height,
            weight,
            life_span,
            temperament
        } = req.body;
        const response = await postDog( image,
            name,
            height,
            weight,
            life_span,
            temperament);
        res.status(200).json(response)
        } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = handlerPost;