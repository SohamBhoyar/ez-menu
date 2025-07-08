const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/menu");

const menuSchema = mongoose.Schema({
    name : String,
    category : String,
    subcategory : String,
    price : Number,
    img : String

})

module.exports = mongoose.model('menu', menuSchema);