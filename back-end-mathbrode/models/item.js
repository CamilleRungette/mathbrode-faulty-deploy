const mongoose = require('./db');

var itemSchema = mongoose.Schema({
    name: String, 
    price: Number,
    size: String,
    description: String,
    copy: Number,
    photo: Buffer,
    first_presentation: Boolean,
})

const ItemModel = mongoose.model('items', itemSchema);

module.exports = ItemModel;
