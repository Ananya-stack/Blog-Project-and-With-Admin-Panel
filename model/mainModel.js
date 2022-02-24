const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    },
    posted_at : {
        type : Date,
        required: true,
        default: Date.now
    }
});

const FormModel = new mongoose.model('reg', FormSchema)
module.exports = FormModel