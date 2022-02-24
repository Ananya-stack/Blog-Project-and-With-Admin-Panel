const express = require('express')
const path = require('path')

const contactModel = require('../../model/contactModel')

exports.adminhelp =(req,res,next)=>{
    contactModel.find((err,data)=>{
        if(!err) {
            res.render('.././views/adminviews/adminhelp',{
                displayData : data
            })
         }
    })
    // res.render('.././views/adminviews/adminhelp')
}

// normal delete
exports.admindeletehelp =(req,res,next)=>{
    const pid = req.params.p_id
    contactModel
    .deleteOne({_id:pid}).then(deletehelp =>{
        console.log(deletehelp, "Query deleted");
        res.redirect('/adminhelp')
    }).catch((err)=>{
        console.log(err, "delete failed");
    })
}



// soft delete
