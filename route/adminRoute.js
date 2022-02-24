const express = require('express')

const route = express.Router()

const adminController = require('../controller/adminController/adminDashboardController')
const adminhelpController = require('../controller/adminController/adminhelpController')
const adminaboutpageController = require('../controller/adminController/adminaboutpageController')
const adminregController = require('../controller/adminController/adminregController')
const adminloginController = require('../controller/adminController/adminloginController')
const adminpostController = require('../controller/adminController/adminpostController')
const adminlogoutController = require('../controller/adminController/adminlogoutController')
// auth declare
const adminauth = require('../controller/adminauth')
const { Router } = require('express')

// pre-login
route.get('/dashboard-adminlog', adminloginController.admin_prelogin)
// createlog
route.post('/createadminlog', adminloginController.createlog)

// admin dashboard page
route.get('/dashboard-admin', adminauth.auth_admin, adminController.admin)
// user data display
route.get('/userdata', adminauth.auth_admin, adminController.data_display)

// about-page
route.get('/adminaboutpage', adminauth.auth_admin, adminaboutpageController.adminaboutpage)
// add about page
route.get('/add_about', adminauth.auth_admin, adminaboutpageController.add_about)
// create about 
route.post('/createabout', adminaboutpageController.createabout)
// delete about
route.get('/deleteabout/:p_id', adminaboutpageController.admindeleteabout)

// help & contact 
route.get('/adminhelp', adminauth.auth_admin, adminhelpController.adminhelp)
// delete help query
route.get('/deletehelp/:p_id', adminhelpController.admindeletehelp)

// post page 
route.get('/adminpost', adminauth.auth_admin, adminpostController.adminpost)
// allow post 
route.get('/allowadminpost/:p_id', adminpostController.changeStatus)
// /admin/changeStatus/1/618e8e9c5fab70fb1d16d2b1
// delete blog posts
route.get('/deleteadminpost/:p_id', adminpostController.admindeletepost)

// register 
route.get('/adminregister', adminauth.auth_admin, adminregController.adminregister)

// logout
route.get('/adminlogout', adminauth.auth_admin, adminlogoutController.adminlogout)

// // authentication part--
// // pre-login
// route.get('/dashboard-adminlog', adminloginController.admin_prelogin)
// // createlog
// route.post('/createadminlog', adminloginController.createlog)
// // admin dashboard page
// route.get('/dashboard-admin', adminauth.auth_admin, adminController.admin)
// // about page 
// route.get('/adminabout', adminauth.auth_admin, adminaboutController.adminabout)
// // add about page
// route.get('/add_about', adminauth.auth_admin,adminaboutController.add_about)
// // create about 
// route.post('/createabout', adminaboutController.createabout)
// // delete about
// route.get('/deleteabout/:p_id', adminaboutController.admindeleteabout)
// // banner 
// route.get('/adminhelp',  adminauth.auth_admin,adminhelpController.adminhelp)
// // post page 
// route.get('/adminpost', adminauth.auth_admin,adminpostlController.adminpost)
// // register 
// route.get('/adminregister', adminauth.auth_admin,adminregController.adminregister)
// // logout
// route.get('/adminlogout', adminauth.auth_admin,adminlogoutController.adminlogout)


module.exports = route