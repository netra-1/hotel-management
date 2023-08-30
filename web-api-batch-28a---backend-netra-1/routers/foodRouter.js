const express = require('express');
const router = new express.Router();
const food = require('../models/foodModel');
const auth = require('../auth/auth');
const upload = require('../fileUpload/fileUpload');

// route for inserting food
router.post('/food/insert',auth.admin_guard,upload.single('food_image'),(req,res)=>{
    if(req.file == undefined){
        return res.json({msg:"Invalid file format"})
    }

    const food_name = req.body.food_name;
    const short_desc = req.body.short_desc;
    const food_desc = req.body.food_desc;
    const food_category = req.body.food_category;
    const food_category_name = req.body.food_category_name;
    const food_price = req.body.food_price;
    const food_image = req.file.filename;

    const data = new food({
        food_name : food_name,
        short_desc : short_desc,
        food_desc : food_desc,
        food_category : food_category,
        food_category_name : food_category_name,
        food_price : food_price,
        food_image : food_image
    })

    data.save()
    .then(()=>{
        res.json({success:true, msg:"Inserted"})}  
    )
    .catch((e)=>{
        res.json({msg:"Failed"})
    })
})

router.get('/food', async (req,res)=>{
    const food_details = await food.find({})
    if (!food_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: food_details });
      }
})

router.get('/food/display_single/:id', async (req,res)=>{
    const food_details = await food.findOne({_id : req.params.id})
    if (!food_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: food_details });
      }
})

// router for updating food
router.put('/food/update/:id', auth.admin_guard, upload.single('food_image'), (req,res)=>{
    console.log(req.body);
    const  _id = req.params.id;
    const food_name = req.body.food_name;
    const food_category = req.body.food_category;
    const short_desc = req.body.short_desc;
    const food_desc = req.body.food_desc;
    const food_price = req.body.food_price;
    // const food_image = req.file.filename;   

    if(req.file==undefined){
        food.updateOne({
            _id: _id
        },{
            food_name : food_name,
            food_category : food_category,
            short_desc : short_desc,
            food_desc : food_desc,
            food_price : food_price,
        })
        .then(()=>{
            res.json({success:true, msg:"Updated"})}  
        )
        .catch((e)=>{
            res.json({msg:"Failed to update food"})
        })
    } else{
        food.updateOne({
            _id: _id
        },{
            food_name : food_name,
            food_category : food_category,
            food_desc : food_desc,
            food_price : food_price,
            short_desc : short_desc,
            food_image : req.file.filename
        })
        .then(()=>{
            res.json({success:true, msg:"Updated"})}  
        )
        .catch((e)=>{
            res.json({msg:"Failed to update food"})
        })
    }
})

//router to delete food
router.delete('/food/:id',auth.admin_guard, (req,res)=>{
    const id = req.params.id;
    food.deleteOne({_id: id})
    .then(()=>{
        res.json({success:true, msg: "Food deleted successfully"})
    })
    .catch((e)=>{
        res.json(e)
    })

})

module.exports = router;