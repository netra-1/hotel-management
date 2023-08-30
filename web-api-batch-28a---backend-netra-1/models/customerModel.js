const mongoose = require('mongoose');

const customer = new mongoose.Schema({
    fname:{
        type: String,
        require: true
    },
    lname:{
        type: String,
        require: true
    },
    username:{
        type: String,
    },
    age:{
        type: Number,
    },
    address:{
        type: String,
    },
    gender:{
        type: String
    },
    email:{
        type: String,
        require : true
    },
    phone:{
        type: Number,
        require : true
    },
    password:{
        type: String,
        require: true
    },
    image:{
        type: String
    },
    userType:{
        type: String
    }
});

module.exports = mongoose.model('Customer', customer);