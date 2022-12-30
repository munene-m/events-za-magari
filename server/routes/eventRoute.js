const express = require("express")
const router = express.Router()
const { createEvent, getAllEvents } = require("../controllers/eventController")

router.route("/create").post(createEvent)
router.route("/get-events").get(getAllEvents)

module.exports = router