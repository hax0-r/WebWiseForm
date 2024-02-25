const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    message: {
        type: String,
        require: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
})

const userModel = mongoose.model("users", schema)
module.exports = userModel