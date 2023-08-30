const express = require('express');
const bcryptjs = require('bcryptjs');
const router = new express.Router();
const admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const admin_auth = require('../auth/auth');

// Admin register
router.post('/admin/register',(req,res)=>{
    const email = req.body.email;
    admin.findOne({email:email})
    .then((a_email)=>{
        if(a_email != null){
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
        const image = req.body.image;

        bcryptjs.hash(password, 10, (e, hashed_pw)=>{
            const data = new admin({
                fname : fname,
                lname : lname,
                username : username,
                age : age,
                address : address,
                gender : gender,
                phone : phone,
                email : email,
                password : hashed_pw,
                image : image,
            })
            data.save()
            .then(()=>{
                res.json({msg:"Registered successfully"})
            })
            .catch((e)=>{
                res.json({msg:"Something went wrong"})
            })
        }) 

    })
    .catch() 
})


// for admin login
router.post('/admin/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    admin.findOne({email:email})
    .then((a_data)=>{
        if (a_data == null){
            return res.json({msg: "Invalid Credentials"});
        }
        bcryptjs.compare(password, a_data.password, (e,result)=>{
            if (result == false){
                return res.json({msg:"Invalid Credentials"})
            }
            
            // creates token for logged in user
            // The token stores the logged in user id
            const token = jwt.sign({adminId : a_data._id}, "userAnon513");
            res.json({token : token});

        })
    })
    .catch()

})


// dashboard for admin
router.get('/admin/dashboard',admin_auth.admin_guard,(req,res)=>{
    res.json({
        fname : req.adminInfo.fname,
        lname : req.adminInfo.lname,
        username : req.adminInfo.username,
        email : req.adminInfo.email
    })
})


module.exports = router;


