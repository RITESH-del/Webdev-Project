const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    "name":{
    type: String,
    required: true,
    },
    "contributions":{
        type: Number,
        required: true,
    },
    "star":{
        type: String,
        required: true,
    },
    "date":{
        type: Date,
        required: true,
    },
    "description":{
        type: String,
        required: true,
    }
},
{
    timestamps: true
})

const Reviews = mongoose.model("Reviews", reviewSchema);
module.exports = Reviews;