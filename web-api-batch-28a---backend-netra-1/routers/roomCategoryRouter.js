const express = require('express');
const router = new express.Router();
const auth = require('../auth/auth');
const roomCategory = require('../models/roomCategory')
const RoomModel = require('../models/roomModel')

router.post('/room_category/insert', auth.admin_guard, (req, res)=>{
    const data = new roomCategory(req.body);

    data.save()
    .then(()=>{
        res.json({msg: "Room category added successfully", success:true})
    })
    .catch((e)=>{
        res.json({msg: "Could not add category"})
    })
})

// router for updating room category
router.put('/room_category/update/:id', auth.admin_guard, async (req,res)=>{
    try{
        const updateCategory = await roomCategory.findByIdAndUpdate(
            req.params.id,
                { $set: req.body },
                { new: true }    
            )
        res.status(200).json({success: true, data: updateCategory });
    } catch(e){
        res.status(500).json({success: false});
    }
})

//router for deleting room category
router.delete('/room_category/:id', auth.admin_guard || auth.admin_guard, async (req,res)=>{
    try{
        await roomCategory.findByIdAndDelete(req.params.id)
        res.status(200).json({success: true, msg: "Deleted" });
    } catch(e){
        res.status(500).json({success: false});
    }
})

router.get('/room_category', async (req,res)=>{
    const room_category_details = await roomCategory.find({})
    if (!room_category_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: room_category_details });
      }
})


router.get('/room_category/:name', async (req,res)=>{
    const room_category_details = await roomCategory.find({
        category_name:req.params.name
    })
    if (!room_category_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: room_category_details });
      }
})

router.get('/room_category/get/:id', async (req,res)=>{
    const room_category_details = await roomCategory.find({
        _id : req.params.id
    })
    if (!room_category_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: room_category_details });
      }
})

router.get('/room_category/display_single/:id', async (req,res)=>{
    const room_details = await roomCategory.findOne({_id : req.params.id})
    if (!room_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: room_details });
      }
})


router.get('/reserve_room/:id', async (req,res)=>{
    try {
        const roomCat = await roomCategory.findById(req.params.id);
        const list = await Promise.all(
            roomCat.rooms.map((room) => {
            return RoomModel.findById(room);
          })
        );
        res.status(200).json({data: list})
      } catch (err) {
        next(err);
      }
})


module.exports = router;