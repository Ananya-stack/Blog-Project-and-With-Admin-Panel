const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const cookieParser=require('cookie-parser')
const jwt=require('jsonwebtoken')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// for flash message[step-1]
const flash=require('connect-flash')
const session =require('express-session')
app.use(flash())
// using session
app.use(session({
    secret:'secrect',
    cookie:{maxAge:600000},
    resave:false,
    saveUninitialized:false
}))

// file[step-1]
const multer = require('multer')

// connect mongoose
const data = "mongodb+srv://ananya_99:IyEhWFFAJdT9sTPQ@cluster0.61gip.mongodb.net/myblog"

// for path declare
const publicpath = path.join(__dirname, './public')
const viewpath = path.join(__dirname, './views')

// static path 
app.use(express.static(publicpath))

app.use(express.urlencoded({ extended:true}))
app.set('views', viewpath)


app.use(cookieParser())

// file upload 2
app.use('/upload', express.static(path.join(__dirname,'upload')))

// file upload 3
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

// file upload 4
const fileFilter=(req,file,cb)=>{
    if(file.mimetype.includes("png") ||
    file.mimetype.includes("jpg") ||
    file.mimetype.includes("webp") ||
    file.mimetype.includes("jpeg")){
        cb(null,true)
    }
    else{
        cb(null,false)
    }    
} 

// file upload 5
app.use(multer({storage:fileStorage,fileFilter:fileFilter,limits:{fieldSize:1024*1024*5}}).single('image'))

// view engine
app.set('view engine', 'ejs')

// route file
const mainRoute = require('./route/mainRoute')
app.use((req,res,next)=>{
    if(req.cookies && req.cookies.token){
        jwt.verify(req.cookies.token, 'abc123', (err, data) => {
            req.user = data
            next()
        })
    }else{
        next()
    }
 })
app.use(mainRoute)


app.use((req,res,next)=>{
    if(req.cookies && req.cookies.token){
        jwt.verify(req.cookies.token, 'abc123', (err, data) => {
            req.user = data
            next()
        })
    }else{
        next()
    }
 })
 const adminRoute = require('./route/adminRoute')
app.use(adminRoute)

// middleware
// const adminAuth = require('./middleware/adminauth')
// app.use(adminAuth)

// const userAuth = require('./middleware/userauth')
// app.use(userAuth)

app.get('/', (req,res)=>{
    res.render('index')
})

const port= process.env.port || 7005
mongoose.connect(data,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    app.listen(port,()=>{
        console.log(`server running http://localhost:${port}`)
      console.log("success");
    })
}).catch(err=>{
    console.log(err)
})
