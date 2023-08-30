const express = require('express');
const router = new express.Router();
const room = require('../models/roomModel');
const auth = require('../auth/auth');
const upload = require('../fileUpload/fileUpload');
const roomCategory = require('../models/roomCategory')
const Booking = require('../models/userBooking')

// room booked by user
router.post('/rooms/availability/:id',auth.cust_guard, async (req,res)=>{
    const bookedDates = req.body.dates;

    const data = new Booking({
        user_id: req.customerInfo._id,
        room_id: req.body.room_id,
        dates : dates,
    });

    data.save()
    .then(async()=>{
        try {
            await room.updateOne(
              { "room_numbers._id": req.params.id },
              {
                $push: {
                  "room_numbers.$.unavailableDates": bookedDates
                },
              }
            ).then(()=>{
              console.log("Success")
            })
        } catch (e) {
          console.log(e)
            res.status(500).json({success: false});
        }
        return res.status(201).json({msg:"Updated", success:true});
    }  
    )
    .catch((e)=>{
      console.log(e)
        res.status(201).json({success: false, msg: "Could not add room" });
    })
})



router.post('/rooms/availability/add/:id',auth.cust_guard, async (req,res)=>{
  const bookedDates = req.body.dates;
  console.log(bookedDates[0])
  const startDate = new Date(bookedDates[0]);
  const endDate = new Date(bookedDates[1]);
  const newBookedDates = [startDate,endDate]

  const data = new Booking({
      user_id: req.customerInfo._id,
      room_id: req.body.room_id,
      dates : newBookedDates,
  });

  data.save()
  .then(async()=>{
      try {
          await room.updateOne(
            { "room_numbers._id": req.params.id },
            {
              $push: {
                "room_numbers.$.unavailableDates": bookedDates
              },
            }
          ).then(()=>{
            console.log("Success")
          })
      } catch (e) {
        console.log(e)
          res.status(500).json({success: false});
      }
      return res.status(201).json({msg:"Updated", success:true});
  }  
  )
  .catch((e)=>{
    console.log(e)
      res.status(201).json({success: false, msg: "Could not add room" });
  })
})

// get user bookings
router.get("/my_booking/get", auth.cust_guard, (req, res) => {
    Booking.find({ user_id: req.customerInfo._id })
      .populate("room_id")
      .then((myBooking) => {
        if (myBooking != null) {
          res.status(200).json({
            success: true,
            data: myBooking,
          });
        }
      })
      .catch((e) => {
        res.json({
          msg: e,
        });
      });
});

router.get('/all_reservations', async (req,res)=>{
  const all_reservations = await Booking.find({})
  if (!all_reservations) {
      res.status(500).json({success: false});
    } else {
      res.status(201).json({success: true, data: all_reservations });
    }
})

router.delete('/my_booking/:id', auth.cust_guard, async (req,res)=>{
    await Booking.findByIdAndDelete(req.params.id)
    res.status(200).json({success: true, msg: "Deleted" });
})


module.exports = router;