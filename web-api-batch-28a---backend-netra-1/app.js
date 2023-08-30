const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.static(__dirname + '/userImages'));
require('./dbConnection/database');
app.use(cors());
// routers
const customerRouter = require('./routers/customerRouter');
app.use(customerRouter);

const staffRouter = require('./routers/staffRouter');
app.use(staffRouter);
const roomRouter = require('./routers/roomRouter');
app.use(roomRouter);

const room_categoryRouter = require('./routers/roomCategoryRouter');
app.use(room_categoryRouter);

const booking = require('./routers/bookingRouter');
app.use(booking)

const food_categoryRouter = require('./routers/foodCategoryRouter');
app.use(food_categoryRouter);

const adminRouter = require('./routers/adminRouter');
app.use(adminRouter);

const foodRouter = require('./routers/foodRouter');
app.use(foodRouter);

const addtoCart = require('./routers/cartRouter');
app.use(addtoCart);

const order = require('./routers/orderRouter');
app.use(order);

app.listen(90);

module.exports = app;