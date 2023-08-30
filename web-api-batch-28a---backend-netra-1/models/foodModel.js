const mongoose = require('mongoose')

const food = new mongoose.Schema({
    food_name:{
        type: String,
        require: true
    },
    short_desc:{
        type:String
    },
    food_desc:{
        type: String
    },
    food_category:{
        type: String
    },
    food_category_name:{
        type: String,
    },
    food_price:{
        type: Number,
        require: true
    },
    food_image:{
        type:String
    }
})
module.exports = mongoose.model('Food', food);