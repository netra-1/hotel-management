const express = require('express');
const bcryptjs = require('bcryptjs');
const router = new express.Router();
const staff = require('../models/staffModel');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');

// Staff register
router.post('/staff/register',(req,res)=>{
    const email = req.body.email;
    staff.findOne({email:email})
    .then((s_email)=>{
        if(s_email != null){
            return res.json({msg:"Email already exists"});
        } 

        const fname = req.body.fname;
        const lname = req.body.lname;
        const username = req.body.username;
        const age = req.body.age;
        const address = req.body.address;
        const gender = req.body.gender;
        const phone = req.body.phone;
        const password = req.body.password;
        const department = req.body.department;
        const image = req.body.image;

        bcryptjs.hash(password, 10, (e, hashed_pw)=>{
            const data = new staff({
                fname : fname,
                lname : lname,
                username : username,
                age : age,
                address : address,
                gender : gender,
                phone : phone,
                email : email,
                password : hashed_pw,
                department : department,
                image : image,
            })
            data.save()
            .then(()=>{
                res.json({msg:"Registered successfully", success:true})
            })
            .catch((e)=>{
                res.json({msg:"Something went wrong"})
            })
        }) 

    })
    .catch() 
})


// for staff login
router.post('/staff/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    staff.findOne({email:email})
    .then((s_data)=>{
        if (s_data == null){
            return res.json({msg: "Invalid Credentials"});
        }
        bcryptjs.compare(password, s_data.password, (e,result)=>{
            if (result == false){
                return res.json({msg:"Invalid Credentials"})
            }
            
            // creates token for logged in user
            // The token stores the logged in user id
            const token = jwt.sign({staffId : s_data._id}, "userAnon513");
            res.json({token : token});

        })
    })
    .catch()

})

//router to delete staff account
router.delete('/all_staff/:id', auth.admin_guard, (req,res)=>{
    const id = req.params.id;
    staff.deleteOne({_id: id})
    .then(()=>{
        res.json({success:true, msg: "Account deleted"})
    })
    .catch((e)=>{
        res.json(e)
    })
})

router.get('/all_staff', async (req,res)=>{
    const staffs = await staff.find({})
    if (!staffs) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: staffs });
      }
})

// dashboard for staff
router.get('/staff/profile',auth.staff_guard,(req,res)=>{
    res.json({
        fname : req.staffInfo.fname,
        lname : req.staffInfo.lname,
        username : req.staffInfo.username,
        email : req.staffInfo.email,
        phone : req.staffInfo.phone,
        age : req.staffInfo.age,
        address : req.staffInfo.address,
        gender : req.staffInfo.gender,
        department: req.staffInfo.department,
        image : req.staffInfo.image,
    })
})

// profile update route
router.put('/staff/update',auth.staff_guard,(req,res)=>{
    const id = req.staffInfo._id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const age = req.body.age;
    const address = req.body.address;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const image = req.body.image;

    staff.updateOne({
        _id : id
    },
    {
        fname : fname,
        lname : lname,
        username : username,
        age : age,
        address : address,
        gender : gender,
        phone : phone,
        image : image,
    })
    .then(()=>{
        res.json({msg:"Updated successfuly", success:true})
    })
    .catch((e)=>{
        res.json({msg:"Invalid"})
    })
})


module.exports = router;


