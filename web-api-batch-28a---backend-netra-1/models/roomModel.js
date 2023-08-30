const mongoose = require('mongoose')

const room = new mongoose.Schema({
    room_title:{
        type: String,
        require: true
    },
    room_desc:{
        type: String
    },
    room_category:{
        type: String,
        require: true
    },
    room_price:{
        type: Number,
        require: true
    },
    max_people:{
        type: Number,
    },
    room_image:{
        type:String
    },
    room_numbers: [{number: Number, unavailableDates: { type: [Date]} }]
})
module.exports = mongoose.model('Room', room);