const express = require('express')
const path = require('path')

const adminModel = require('../../model/adminModel')

exports.adminaboutpage =(req,res)=>{
    adminModel.find({status :1},(err,data)=>{
                if(!err){
                    res.render('.././views/adminviews/adminaboutpage',{
                        displayData : data
                    })
                }
            })
    // res.render('.././views/adminviews/adminaboutpage')
}

exports.add_about =(req,res)=>{
    res.render('.././views/adminviews/adminadd_about')
}

exports.createabout =(req,res,next)=>{
    const admin = new adminModel({
        editor1 : req.body.editor1,
        status : 1
    })
    admin.save().then((result)=>{
        console.log(result,"about save successfully");
        res.redirect('/adminaboutpage')
    }).catch((err)=>{
        console.log(err, "about not saved");
        res.redirect('/add_about')
    })
}

// delete about by id
// exports.admindeleteabout =(req,res,next)=>{
//     const pid = req.params.p_id
//     adminModel
//     .deleteOne({_id:pid}).then(deleteabout=>{
//         console.log(deleteabout, "about part deleted");
//         res.redirect('/adminaboutpage')
//     }).catch((err)=>{
//         console.log(err, "delete failed");
//     })
// }

// // soft-delete by id
exports.admindeleteabout = (req,res,next)=>{
    adminModel
    .findByIdAndUpdate(req.params.p_id,{status:0},(err,data)=>{
        if(!err){
            // req.flash('message','post deleted successfully')
            res.redirect('/adminaboutpage')
        } 
        else{
            console.log(err);
        }
    })
}