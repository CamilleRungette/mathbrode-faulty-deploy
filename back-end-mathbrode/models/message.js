const mongoose = require('./db');

var messageSchema = mongoose.Schema({
    object: String, 
    content: String,
    sender_email: String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    item_id: {type: mongoose.Schema.Types.ObjectId, ref: "items"},
    date: Date,
});

const MessageModel = mongoose.model('messages', messageSchema);

module.exports = MessageModel;
