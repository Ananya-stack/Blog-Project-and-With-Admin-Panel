const express = require('express')
const path = require('path')



exports.adminlogout =(req,res)=>{
    // res.render('.././views/adminviews/adminlogout')
    res.clearCookie("token")
    res.redirect('/dashboard-adminlog')
}
