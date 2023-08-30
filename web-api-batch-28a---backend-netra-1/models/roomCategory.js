const mongoose = require('mongoose')

const roomCategory = new mongoose.Schema({
    category_name:{
        type: String,
        require: true
    },
    photos:{
        type: [String],
    },
    short_desc:{
        type: String,
    },
    desc:{
        type:String,
        require: true
    },
    rooms:{
        type: [String],
    },
    price:{
        type: Number,
    },
    featured:{
        type: Boolean,
        default: false,
    }

})
module.exports = mongoose.model('RoomCategory', roomCategory);