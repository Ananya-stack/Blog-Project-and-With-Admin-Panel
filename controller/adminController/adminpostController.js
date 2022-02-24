const express = require('express')
const path = require('path')

const postModel = require('../../model/postModel')

exports.adminpost =(req,res,next)=>{
    postModel.find({status :1},(err,data)=>{
        if(!err) {
           res.render('.././views/adminviews/adminpost',{
               displayData : data
           })
        }
    })
}


// allow post
// exports.adminallowpost=(req,res)=>{
//     postModel
//     .findByIdAndUpdate(req.params.p_id,{status:1},(err,data)=>{
//         if(!err){
//             // req.flash('message','post deleted successfully')
//             res.redirect('/adminpost')
//         } 
//         else{
//             console.log(err);
//         }
//     })
// }

// bootstrap switch btn for allow display
exports.changeStatus = async (req,res)=>{
    console.log(req.params);
    let {status,id} = req.params;
    status = status === 'true' ? true: false;
   try{
       const result = await postModel.findByIdAndUpdate({_id:id})
       .then((data)=>{
        data.status = !status;
        return data.save().then ((results)=>{
            res.redirect('/adminpost');
            console.log(results, 'update successfully');
        });
       })
       .catch((err)=>{
           console.log(err, 'update failed');
       })
   }
   catch(error){
       console.log(error.message);
   }
}


// delete bolg post at admin
// exports.admindeletepost=(req,res)=>{
//     const pid = req.params.p_id
//     postModel.deleteOne({_id:pid}).then(deletepost=>{
//         console.log(deletepost, "post deleted");
//         res.redirect('/adminpost')
//     }).catch((err)=>{
//         console.log(err, "delete failed");
//     })
// }

// soft delete
exports.admindeletepost=(req,res)=>{
    postModel
    .findByIdAndUpdate(req.params.p_id,{status:0},(err,data)=>{
        if(!err){
            // req.flash('message','post deleted successfully')
            res.redirect('/adminpost')
        } 
        else{
            console.log(err);
        }
    })
}
