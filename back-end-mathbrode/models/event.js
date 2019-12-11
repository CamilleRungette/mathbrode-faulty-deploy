const mongoose = require('./db');

let eventSchema = mongoose.Schema({
    name: String,
    address: String,
    date: Date,
    photo: Buffer
});

const EventModel = mongoose.model("events", eventSchema);

module.exports = EventModel;