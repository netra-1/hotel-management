const jwt = require('jsonwebtoken');
const customer = require('../models/customerModel')
const staff = require('../models/staffModel');
const admin = require('../models/adminModel')

module.exports.cust_guard = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, "userAnon513");

        customer.findOne({_id : data.customerId})
        .then((c_data)=>{
            // res.json({msg : c_data})
            req.customerInfo = c_data;
            next();
        })
        .catch((e)=>{
            res.json({msg: "Invalid Token"});
        })
    }
    catch(e){
        res.json({msg:"Invalid Token"})
    }
}


module.exports.staff_guard = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, "userAnon513");
        // res.json({msg:data});

        staff.findOne({_id : data.staffId})
        .then((s_data)=>{
            // res.json({msg : c_data})
            req.staffInfo = s_data;
            next();
        })
        .catch((e)=>{
            res.json({msg: "Invalid Token"});
        })


    }
    catch(e){
        res.json({msg:"Invalid Token"})
    }
}


module.exports.admin_guard = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, "userAnon513");
        // res.json({msg:data});

        admin.findOne({_id : data.adminId})
        .then((a_data)=>{
            // res.json({msg : c_data})
            req.adminInfo = a_data;
            next();
        })
        .catch((e)=>{
            res.json({msg: "Invalid Token"});
        })


    }
    catch(e){
        res.json({msg:"Invalid Token"})
    }
}
