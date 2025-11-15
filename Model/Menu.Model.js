// const mongoose = require('mongoose');

// const menuSchema = mongoose.Schema({
//     "price": {
//         type: String,
//         required: true,
//     },
//     "image": {
//         type: Number,
//         required: true,
//     },
//     "rating": {
//         type: String,
//         required: true,
//     },
//     "delivery_time": {
//         type: String,
//         required: true,
//     },
//     "item": {
//         type: String,
//         required: true,
//     },
//     "location": {
//         type: String,
//         required: true,
//     }
// },
// {
//     timestamps: true, //createdAt, updatedAt
// })

// const menu = mongoose.model("menu", menuSchema);
// module.exports = menu;

const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    default: "General"
  }
});

module.exports = mongoose.model('Menu', menuSchema);
