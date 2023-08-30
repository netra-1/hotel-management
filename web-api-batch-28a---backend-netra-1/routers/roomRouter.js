const express = require('express');
const router = new express.Router();
const room = require('../models/roomModel');
const auth = require('../auth/auth');
const upload = require('../fileUpload/fileUpload');
const roomCategory = require('../models/roomCategory')
const Booking = require('../models/userBooking')

router.post('/room/insert/:catid',auth.admin_guard, async (req,res)=>{
    const roomCategoryId = req.params.catid;
    const data = new room(req.body);

    data.save()
    .then(async()=>{
        try{
            await roomCategory.findByIdAndUpdate(roomCategoryId, {
                $push: {rooms: data._id}
            });
        }catch(e){
        res.status(500).json({success: false});
        }
        res.json({msg:"Room added successfully", success:true})
    }  
    )
    .catch((e)=>{
        res.status(201).json({success: true, msg: "Could not add room" });
    })
})

// router for updating room
router.put('/room/update/:id', auth.admin_guard, async (req,res)=>{
    try{
        const updateRoom = await room.findByIdAndUpdate(
            req.params.id,
                { $set: req.body },
                { new: true }    
            )
        res.status(200).json({success: true, data: updateRoom });
    } catch(e){
        res.status(500).json({success: false});
    }
})

//router for deleting room
router.delete('/room/:id/:catid', auth.admin_guard, async (req,res)=>{
    const roomCategoryId = req.params.catid;
    try{
        await room.findByIdAndDelete(req.params.id)
        try{
            await roomCategory.findByIdAndUpdate(roomCategoryId, {
                $pull: { rooms: req.params.id }
            })
        }catch(e){
        res.status(500).json({success: false});
        }
        res.status(200).json({success: true, msg: "Deleted" });
    } catch(e){
        res.status(500).json({success: false});
    }
})

router.get('/room', async (req,res)=>{
    const room_details = await room.find({})
    if (!room_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: room_details });
      }
})

router.get('/room/display_single/:id', async (req,res)=>{
    const room_details = await room.findOne({_id : req.params.id})
    if (!room_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: room_details });
      }
})

router.get('/room/:id', async (req,res)=>{
    const room_details = await room.find({
        _id : req.params.id
    })
    if (!room_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: room_details });
      }
})



router.get('/get_room_id/:id',auth.admin_guard, async (req,res)=>{
    const roomCat_details = await roomCategory.findOne({
        rooms : req.params.id
    })
    if (!roomCat_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: roomCat_details });
      }
})

module.exports = router;