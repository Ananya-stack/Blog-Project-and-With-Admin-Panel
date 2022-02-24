const express = require('express')
const path = require('path')

const postModel = require('../model/postModel')

exports.samplepost =(req,res)=>{
    postModel.find((err,data)=>{
        if(!err){
            res.render('post',{
                displayData : data
            })
        }
    })
}

// for sample post creation
exports.addpost =(req,res,next)=>{
    // console.log(req.body);
    const image = req.file

    const title = req.body.title.trim()
    const slug = title.replace(/\s+/g, '-').toLowerCase()
   
    const Post = new postModel({
        title : title,
        subtitle : req.body.subtitle,
        post : req.body.editor1,
        status: 1,
        slug : slug,
        image: image.path
    })
    Post.save().then((result)=>{
        console.log(result,"Post save successfully")
        req.flash('message','Thank you for posting Blog. And it is under verification.')
        res.redirect('/')
    }).catch((err)=>{
        console.log(err,"post not saved")
    })
}

// for redirect with slug
exports.postdetails = (req,res) =>{
    postModel.findOne({slug:req.params.slug},(err,data)=>{
        if(!err){
            console.log(data);
            res.render('post--details',{
                data: data
            })
        }
    })
}

// exports.create = (req,res,next)=>{
//     const Post = new postModel ({
//         title : req.body.title,
//         subtitle : req.body.subtitle,
//         editor1 : req.body.editor1
//     })
//     Post.save().then((result)=>{
//         console.log(result,"post save successfully");
//         res.redirect('/')
//     }).catch((err)=>{
//         console.log(err, "post not saved");
//         res.redirect('/addsamplepost')
//     })
// }
