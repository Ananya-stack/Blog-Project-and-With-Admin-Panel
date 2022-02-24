const express = require('express')

const route = express.Router()

// const mainController = require('../controller/mainController')
const homeController = require('../controller/homeController')
const aboutController = require('../controller/aboutController')
const postController = require('../controller/postController')
const contactController = require('../controller/contactController')
const regController = require('../controller/regController')
const logoutController = require('../controller/logoutController')

// auth
const userAuth = require('../controller/userAuth')
// route.get('', userAuth.auth_user)

// for index page
route.get('/', homeController.index)

// about page
route.get('/about', userAuth.auth_user,aboutController.about)

// sample-post page
route.get('/samplepost', userAuth.auth_user,postController.samplepost)
// for sample post creation
route.post('/addsamplepost', postController.addpost)
// for redirect with slug
route.get('/post_details/:slug', postController.postdetails)

// contact page 
route.get('/contact', contactController.contact)
// for contact create 
route.post('/createcontact', contactController.createcontact)

// register page
route.get('/register', regController.register)
route.post('/postreg', regController.postregister)

// login page
route.get('/login', regController.login)
route.post('/postlogin', regController.postlog)
// after login redirect to next page[post-login page]
route.get('/afterlog', regController.afterlog)

// logout page
route.get('/logout', logoutController.logout)

module.exports = route