const mongoose = require('./db');

let eventSchema = mongoose.Schema({
    name: String,
    address: String,
    date: Date,
    photo: String,
    starting_time: String,
    ending_time: String,
});

const EventModel = mongoose.model("events", eventSchema);

module.exports = EventModel;