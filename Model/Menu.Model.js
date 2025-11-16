const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    "price": {
        type: String,
        required: true,
    },
    "image": {
        type: String,
        required: true,
    },
    "rating": {
        type: String,
        required: true,
    },
    "delivery_time": {
        type: String,
        required: true,
    },
    "item": {
        type: String,
        required: true,
    },
    "location": {
        type: String,
        required: true,
    }
},
{
    timestamps: true, //createdAt, updatedAt
})

const Menu = mongoose.model("menu", menuSchema);
module.exports = Menu;

