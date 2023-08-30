const mongoose = require("mongoose");

const Booking = mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    dates: {
        type: [Date]
    },
});

module.exports = mongoose.model("Booking", Booking);