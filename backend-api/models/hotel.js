'uset strict'

const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    stars:{
        type: Number
    },
    image: {
        type: String
    },
    amenities:{
        type: [String]
    }
})

if (!HotelSchema.options.toJSON) {
	HotelSchema.options.toJSON = {};
}

/**
 * Add a tranforma method to change _id by id
 * whent toJSON is used.
 */
HotelSchema.options.toJSON.transform = (doc, ret) => {
	// Remove the _id of every document before returning the result
	ret.id = ret._id; // eslint-disable-line no-param-reassign
	delete ret._id; // eslint-disable-line no-param-reassign
	return ret;
};

module.exports = mongoose.model('Hotel', HotelSchema); 
