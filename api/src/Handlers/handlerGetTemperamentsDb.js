const getTemperamentsDb = require('../Controllers/getTemperamentsDb');

const handlerGetTemperamentsDb = async (req,res) => {
    try {
        const response = await getTemperamentsDb();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = handlerGetTemperamentsDb;