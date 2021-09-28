const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: Number
    },
    dateOfBirth: {
        data: String,
        month: String,
        year: String
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('users', userSchema);