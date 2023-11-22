const {Dogs , Temperaments} = require('../db')

const deleteDogsBd = async (id) => {

        
        const response = await Dogs.destroy({where: {id: id}});
        return response;
 
}

module.exports =  deleteDogsBd