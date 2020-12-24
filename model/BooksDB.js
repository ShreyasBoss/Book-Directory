const mongoose = require('mongoose');

const BookScema = mongoose.Schema({
    Name : {
        type:String,
        required:true,
    },
    Category :{
        type:String,
        required:true,
    },
    Prise:{
        type:Number,
        required:true
    },
    Author:{
        type:String,
        required:true,
    },
    InsertDate:{
        type:Date,
        default:Date.now
    },
    Stock:{
        type:Number,
        required:true
    } 
})

module.exports = mongoose.model('book',BookScema);


