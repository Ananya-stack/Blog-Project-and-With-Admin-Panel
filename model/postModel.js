const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const postSchema = new Schema({
    title : {
        type : String,
        required: [true, 'title is required'],
    },
    subtitle :{
        type : String,
        required: [true, 'subtitle is required'],
    },
    post : {
        type : String,
        required: [true, 'post is required'],
    },
    image:{
        type:String,
        required: false,
    },
    status : {
        type : Number,
        required: true,
        default: false 
        // no display before active status true
    },
    slug : {
        type : String,
        unique: false,
        required: true
    },
    posted_at : {
        type : Date,
        required: true,
        default: Date.now
    }
});

postSchema.plugin(mongoosePaginate);

const postModel = new mongoose.model('samplepost', postSchema)
module.exports = postModel
