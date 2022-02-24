const express = require('express')
const path = require('path')

const contactModel = require('../model/contactModel')

exports.contact =(req,res)=>{
    contactModel.find((err,data)=>{
        if(!err){
            res.render('contact',{
                message:req.flash('message'),
                displayData : data
            })
        }
    })
}

// for contact creation
exports.createcontact =(req,res,next)=>{

    const contact = new contactModel({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
    })
    contact.save().then((result)=>{
        console.log(result,"Data save successfully")
        req.flash('message','Thank you for reaching us. We will get back to you as soon as possible!')
        res.redirect('/contact')
    }).catch((err)=>{
        console.log(err,"Data not saved")
    })
}