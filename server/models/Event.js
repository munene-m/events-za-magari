const mongoose = require("mongoose")
const eventSchema = mongoose.Schema({
    eventTitle: {
        type: String,
        required: true,
    },
    eventHost: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true
    },
    eventImage: {
        type: String,
        required: false
    },
    eventLocation:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("eventSchema", eventSchema)