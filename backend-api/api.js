const express = require('express');
const {celebrate, Joi} = require('celebrate');

const api = express.Router();

const hotel = require('./controllers/hotel')


// secure endpoints with joi and celebrate (middleware)

api.get('/all-hotels', hotel.getAllHotels);

api.get('/single-hotel/:id', celebrate({
    params: Joi.object().keys({
		id: Joi.string().required()
	})
}), hotel.getSingleHotel)


api.post('/add-hotel', celebrate({
    body:Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.number().required(),
        stars: Joi.number().required(),
        image: Joi.string().required(),
        amenities: Joi.array().items(Joi.string())
    })
}), hotel.addHotel)

api.put('/update-hotel/:id', celebrate({
    params: Joi.object().keys({
		id: Joi.string().required()
	}),
    body:Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.number().required(),
        stars: Joi.number().required(),
        image: Joi.string().required(),
        amenities: Joi.array().items(Joi.string())
    })
}), hotel.modifyHotel)

api.delete('/delete-hotel/:id', celebrate({
    params: Joi.object().keys({
		id: Joi.string().required()
	})
}), hotel.deleteHotel)

module.exports = api;
