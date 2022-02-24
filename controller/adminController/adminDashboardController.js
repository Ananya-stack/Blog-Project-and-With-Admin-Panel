const express = require('express')
const path = require('path')

const mainModel = require('../../model/mainModel')
const adminModel = require('../../model/adminModel')
const postModel = require('../../model/postModel')

exports.admin =(req,res)=>{
    res.render('.././views/adminviews/adminDashboard')
}

// user data display
exports.data_display =(req,res)=>{
    mainModel.find((err,data)=>{
        
            if(!err) {
                res.render('.././views/adminviews/adminuserData',{
                    displayData : data,
                   
                })
             }
        
        
    })
    // postModel.find((err,data)=>{
    //     if(!err) {
    //         res.render('.././views/adminviews/adminuserData',{
    //             displayData : data
    //         })
    //      }
    // })
    // res.render('.././views/adminviews/adminuserData')
}