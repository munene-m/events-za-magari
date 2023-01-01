const Event = require('../models/Event')
const asyncHandler = require('express-async-handler')


const createEvent = asyncHandler(async (req, res) => {
    const { eventTitle, eventHost, eventDate, eventImage, eventLocation } = req.body

    if (!eventTitle || !eventHost || !eventDate || !eventLocation) {
        res.status(400)
        throw new Error("Please enter all required fields")
    }

    // const eventExists = await Event.findOne({ Event: {$all: [eventTitle, eventDate, eventHost]} })

    // if (eventExists) {
    //     res.status(400)
    //     throw new Error("Event already exists!")
    // }

    const event = await Event.create({
        eventTitle,
        eventHost,
        eventDate,
        eventImage,
        eventLocation
    })
    if (event) {
        res.status(201);
        res.json({
            _id: event.id,
            eventTitle: event.eventTitle,
            eventHost: event.eventHost,
            eventDate: event.eventDate,
            eventLocation: event.eventLocation,
            eventImage: event.eventImage
        })
    } else {
        res.status(400);
        throw new Error("An error occurred");
    }
})

const getAllEvents = asyncHandler(async (req, res) => {
    const events = await Event.find().sort({ $natural: -1 })
    res.status(200).json(events)
})


module.exports = { createEvent, getAllEvents }