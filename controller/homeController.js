const express = require('express')
const path = require('path')

const postModel = require('../model/postModel')

exports.index =(req,res,next)=>{
   const pager = req.query.page ? req.query.page : 1
   const options ={
       page : pager,
       limit : 3,
       collation: {
        locale: 'en',
        
      },
   };
   postModel.paginate ({status:1}, options).then(function (data){
       if(data){
         res.render('index',{
            data : data,
            pager: pager,
            message:req.flash('message'),
         })
       }
   }).catch((err)=>{
       console.log(err);
   })



    // postModel.find((err,data)=>{
    //     if(!err) {
    //        res.render ('index',{
    //            displayData : data
    //        })
    //     }
    // })
}

