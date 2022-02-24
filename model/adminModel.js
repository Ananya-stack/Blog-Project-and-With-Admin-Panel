const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    editor1 :{
        type : String,
        required: true
    },
    status :{
        type: Number
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

const adminModel = new mongoose.model('adminabout', adminSchema)
module.exports = adminModel