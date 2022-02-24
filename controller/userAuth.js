const express=require('express')

const path=require('path')
 
const mainModel = require('../model/mainModel')

exports.auth_user = (req,res,next)=>{
    if(req.user){
        next()   
    }else{
        res.redirect('/login')
    }
}