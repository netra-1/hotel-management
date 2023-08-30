const mongoose = require("mongoose");

const Cart = mongoose.Schema({
    food_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    quantity: {
        type: Number,
    },
});

module.exports = mongoose.model("Cart", Cart);