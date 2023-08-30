const mongoose = require('mongoose')

const foodCategory = new mongoose.Schema({
    category_name:{
        type: String,
        require: true,
        unique: true,
    },
    desc:{
        type: String,
        require: true,
    }
})
module.exports = mongoose.model('FoodCategory', foodCategory);