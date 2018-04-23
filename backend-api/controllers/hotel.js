
const Hotel = require('../models/hotel')

/**
 * This is endpoint getAllHotels
 * @returns {array} hotels 
 */
async function getAllHotels(req, res){
    try{
        const hotels = await Hotel.find()
        if(!hotels){
            return res.status(404).send({message: 'there are not hotels'})
        }

        return res.status(200).send({hotels})

    }catch(error){
       return res.status(500).send({message: 'Internal server error'})
    }
}

/**
 * This is endpoint signUpCompany
 * @param {string} id - id hotel.
 * @returns {object} hotel
 */
async function getSingleHotel(req, res){
    const id = req.params.id
    try {

        const hotel = await Hotel.findById({'_id': id})

        if(!hotel){
            return res.status(404).send({message: 'not found'})
        }
        return res.status(200).send({hotel})

    }catch(error){
        return res.status(500).send({message: 'Internal server error'})
    }
}

/**
 * This is endpoint addHotel
 * @param {String} name - hotel name.
 * @param {number} price - price per night
 * @param {number} stars - hotel stars.
 * @param {String} image - image url.
 * @returns {string} repeated hotel saved succesfully or failed
 */
async function addHotel(req, res){ 
    const data = req.body
    try {   
        const hotel = await new Hotel(data).save()
        return res.status(200).send({message: 'Hotel saved successfully'})
    }catch(err){
        return res.status(500).send({message: 'internal server error'})
    }
    
}

/**
 * This is endpoint modifyHotel
 * @param {String} id -  hotel id.
 * @param {String} name - hotel name.
 * @param {number} price - price per night
 * @param {number} stars - hotel stars.
 * @param {String} image - image url.
 * @returns {string} repeated hotel saved succesfully or failed
 */
async function modifyHotel(req, res){
    const data = req.body
    const { id } = req.params
    try{
        const hotel = await Hotel.findByIdAndUpdate({_id: id}, data)
        return res.status(200).send({message: 'Hotel updated successfully'})
        
    }catch(err){
        return res.status(500).send({message: 'internal server error'})
        
    }
}

/**
 * This is endpoint deleteHotel
 * @param {String} id - hotel is.
 * @returns {string} repeated user saved succesfully
 */

async function deleteHotel(req, res){
    const { id } = req.params
    try{
        const hotel = await Hotel.findByIdAndRemove({_id: id})
        return res.status(200).send({message: 'Hotel Removed successfully'})
    }catch(e){
        return res.status(500).send({message: 'internal server error'})
    }
}

module.exports = {
    getAllHotels,
    getSingleHotel,
    addHotel,
    modifyHotel,
    deleteHotel
}