const express = require('express')
const path = require('path')

exports.logout =(req,res)=>{
    // res.render('logout')
    res.clearCookie("token")
    res.redirect('/login')
}