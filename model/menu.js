const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sohambhoyar096:cjxVP0j0dsuNlc9W@ez-menu.kpxy1hv.mongodb.net/?retryWrites=true&w=majority&appName=EZ-Menu");

const menuSchema = mongoose.Schema({
    name : String,
    category : String,
    subcategory : String,
    price : Number,
    img : String

})

module.exports = mongoose.model('menu', menuSchema);
