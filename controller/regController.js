const express = require('express')
const path = require('path')

const cookieParser=require('cookie-parser')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const FormModel = require('../model/mainModel')

exports.register =(req,res)=>{
    res.render('register')
}

exports.postregister =(req,res)=>{
    FormModel.find({email:req.body.email}, (err, data) => {
        if(data.length == 0){
            if(req.body.password == req.body.cpassword){
             const register = new FormModel({
                 name:req.body.name,
                 email:req.body.email,
                 phone:req.body.phone,
                 password:req.body.password
                })
                let salt = bcrypt.genSaltSync(10)
                register.password = bcrypt.hashSync(register.password, salt)
                register.save((err,data)=>{
                    if(!err){
                        res.redirect('/login')   
                    }
                })
            }else{
                console.log('password not match')      
            }
        }
        else{
            console.log('email alredy exist')
          
        }
    })
}


exports.login =(req,res)=>{
    login_data = {}
    login_data.email = (req.cookies.email) ? req.cookies.email : undefined
    login_data.password = (req.cookies.password) ? req.cookies.password : undefined
    //console.log(login_data)
    res.render('login',{
        data: login_data 
    })
    // res.render('login')
}

exports.postlog = (req,res)=>{
    FormModel.findOne({email:req.body.email}, (err, data) => {
        if(data){
            let hashpassword = data.password
            if(bcrypt.compareSync(req.body.password, hashpassword)){
                const token = jwt.sign({id:data._id, name:data.name}, 'abc123')
                res.cookie('token', token)  
                if(req.body.remember){
                    res.cookie('email', req.body.email)
                    res.cookie('password', req.body.password)
                }
                res.redirect('/afterlog')
            }
        }else{
            console.log('wrong input')
        }
    })
}

// after login successful redirect to next page[post-login page]
exports.afterlog = (req,res)=>{
    // if(req.user){
        let data = req.user
    //     FormModel.find({},function(err,allDetails){
    //         if (err) {
    //             console.log(err);
    //         } else {
                res.render('postlogin',{
                    data: data
                   
                })
            // }
    //     })
    // }
    // res.render('postlogin')
}