const express = require('express');
const bcryptjs = require('bcryptjs');
const router = new express.Router();
const customer = require('../models/customerModel');
const jwt = require('jsonwebtoken');
const { route } = require('express/lib/application');
const cust_auth = require('../auth/auth');
const upload = require('../fileUpload/fileUpload');

router.post('/customer/register', (req,res)=>{

    const email = req.body.email;
    customer.findOne({email:email})
    .then((c_email)=>{
        if(c_email != null){
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
            const data = new customer({
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
                res.json({msg:"Registered successfully" , success:true})
            })
            .catch((e)=>{
                res.json({msg:"Something went wrong"})
            })
        }) 

    })
    .catch()  
})


// for customer login
router.post('/customer/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    customer.findOne({email:email})
    .then((c_data)=>{
        if (c_data == null){
            return res.json({msg: "Invalid Credentials"});
        }
        bcryptjs.compare(password, c_data.password, (e,result)=>{
            if (result == false){
                return res.json({msg:"Invalid Credentials"})
            }

            // creates token for logged in user
            // The token stores the logged in user id
            const token = jwt.sign({customerId : c_data._id}, "userAnon513");
            res.json({token : token, msg:"Login Success"});

        })
    })
    .catch()

})

// router for delete => for testing only
// router.delete('/customer/comment/delete',cust_auth.cust_guard,(req,res)=>{
//     res.json({msg:"Deleted"});
// })


// This is dashboard route for customer
router.get('/customer/profile',cust_auth.cust_guard,(req,res)=>{
    // console.log(req);
    // res.json(req.CustomerInfo);
    res.json({
        fname : req.customerInfo.fname,
        lname : req.customerInfo.lname,
        username : req.customerInfo.username,
        email : req.customerInfo.email,
        phone : req.customerInfo.phone,
        age : req.customerInfo.age,
        address : req.customerInfo.address,
        gender : req.customerInfo.gender,
        password : req.customerInfo.password,
        image : req.customerInfo.image,
    })
})

//router to delete customer account
router.delete('/all_user/:id', cust_auth.staff_guard, (req,res)=>{
    const id = req.params.id;
    customer.deleteOne({_id: id})
    .then(()=>{
        res.json({success:true, msg: "Account deleted"})
    })
    .catch((e)=>{
        res.json(e)
    })
})

router.get('/all_user', async (req,res)=>{
    const customers = await customer.find({})
    if (!customers) {
        res.status(500).json({success: false});
      } else {
        res.status(201).json({success: true, data: customers });
      }
})

router.put('/customer/update',cust_auth.cust_guard,(req,res)=>{
    const id = req.customerInfo._id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const age = req.body.age;
    const address = req.body.address;
    const gender = req.body.gender;
    const phone = req.body.phone;
    console.log(req.body)
    customer.updateOne({
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
    })
    .then(()=>{
        res.json({msg:"Updated successfuly", success:true})
    })
    .catch((e)=>{
        res.json({msg:"Invalid to"})
    })
})

// image update router
router.put('/customer/update_image', cust_auth.cust_guard, upload.single('cust_image'),(req,res)=>{
    if(req.file==undefined){
        return res.json({msg: "Invalid file format"})
    }
    customer.updateOne(
        {
            _id: req.customerInfo._id
        },
        {
            image: req.file.filename
        })
        .then()
        .catch()
    res.send({message: "image updated"})
})





module.exports = router;