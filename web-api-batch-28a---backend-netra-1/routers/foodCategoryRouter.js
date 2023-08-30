const express = require('express');
const router = new express.Router();
const auth = require('../auth/auth');
const foodCategory = require('../models/foodCategory')

router.post('/food_category/insert', auth.admin_guard, (req, res)=>{
    const category_name = req.body.category_name;
    const desc = req.body.desc;

    const data = new foodCategory({
        category_name : category_name,
        desc : desc,
    })

    data.save()
    .then(()=>{
        res.json({success:true, msg: "food category added successfully", success:true})
    })
    .catch((e)=>{
        res.json({msg: "Could not add category"})
    })
})

router.get('/food_category', async (req,res)=>{
    const food_category_details = await foodCategory.find({})
    if (!food_category_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: food_category_details });
      }
})


router.get('/food_category/display_single/:id', auth.admin_guard, async (req,res)=>{
    const foodCategory_details = await foodCategory.findOne({_id : req.params.id})
    if (!foodCategory_details) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: foodCategory_details });
      }
})

// router for updating food
router.put('/food_category/update/:id', auth.admin_guard, (req,res)=>{
    const  _id = req.params.id;
    const category_name = req.body.category_name;
    const desc = req.body.desc;

    if(req.file==undefined){
        foodCategory.updateOne({
            _id: _id
        },{
            category_name : category_name,
            desc : desc,
        })
        .then(()=>{
            res.json({success:true, msg:"Updated"})}  
        )
        .catch((e)=>{
            res.json({msg:"Failed to update food category"})
        })
    } else{
        foodCategory.updateOne({
            _id: _id
        },{
            category_name : category_name,
            desc : desc,
        })
        .then(()=>{
            res.json({success:true, msg:"Updated"})}  
        )
        .catch((e)=>{
            res.json({msg:"Failed to update food category"})
        })
    }
})

//router to delete food
router.delete('/food_category/:id',auth.admin_guard, (req,res)=>{
    const id = req.params.id;
    foodCategory.deleteOne({_id: id})
    .then(()=>{
        res.json({success:true, msg: "Food Category deleted successfully"})
    })
    .catch((e)=>{
        res.json(e)
    })
})

module.exports = router;