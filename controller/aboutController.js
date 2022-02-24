const express = require('express')
const path = require('path')

const adminModel = require('../model/adminModel')

exports.about =(req,res,next)=>{
    adminModel.find({status:1},(err,data)=>{
        if(!err){
            res.render('about',{
                displayData : data
            })
        }
    })
}