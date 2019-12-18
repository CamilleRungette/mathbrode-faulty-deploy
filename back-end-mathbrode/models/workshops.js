const mongoose = require('./db');

let workshopSchema = mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    duration: String,
});

const WorkshopModel = mongoose.model("workshops", workshopSchema);

module.exports = WorkshopModel;