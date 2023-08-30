const mongoose = require('mongoose');

const staff = new mongoose.Schema({
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
        require: true
    },
    age:{
        type: Number,
        require: true
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
    department:{
        type: String,
        require: true
    },
    image:{
        type: String
    }
});

module.exports = mongoose.model('Staff', staff)