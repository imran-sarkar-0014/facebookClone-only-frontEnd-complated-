const mongoose = require('mongoose')
const { Schema } = mongoose;

const messageSchema = new Schema({
    text: {
        type: String
    },
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('messages', messageSchema);