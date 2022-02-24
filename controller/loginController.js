// const express = require('express')
// const path = require('path')

// const cookieParser=require('cookie-parser')
// const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')

// const FormModel = require('../model/mainModel')

// exports.login =(req,res)=>{
//     login_data = {}
//     // login_data.email = (req.cookies.email) ? req.cookies.email : undefined
//     // login_data.password = (req.cookies.password) ? req.cookies.password : undefined
//     //console.log(login_data)
//     res.render('login',{
//         data: login_data 
//     })
//     // res.render('login')
// }

// exports.postlog = (req,res)=>{
//     FormModel.findOne({email:req.body.email}, (err, data) => {
//         if(data){
//             let hashpassword = data.password
//             if(bcrypt.compareSync(req.body.password, hashpassword)){
//                 const token = jwt.sign({id:data._id, name:data.name}, 'abc123')
//                 res.cookie('token', token)  
//                 if(req.body.remember){
//                     res.cookie('email', req.body.email)
//                     res.cookie('password', req.body.password)
//                 }
//                 res.redirect('/afterlog')
//             }
//         }else{
//             console.log('wrong input')
//         }
//     })
// }

// exports.afterlog = (req,res)=>{
//     // if(req.user){
//         let data = req.user
//     //     FormModel.find({},function(err,allDetails){
//     //         if (err) {
//     //             console.log(err);
//     //         } else {
//                 res.render('postlogin',{
//                     data: data
                   
//                 })
//     //         }
//     //     })
//     // }
//     // res.render('postlogin')
// }