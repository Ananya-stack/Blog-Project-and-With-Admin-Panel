const express=require('express')

const path=require('path')

// const adminModel=require('../model/adminModel')

const jwt=require('jsonwebtoken')

exports.auth_admin = (req, res, next) => {
    if(req.user){
        next()   
    }else{
        res.redirect('/dashboard-adminlog')
    }
}