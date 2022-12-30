const express = require("express")
const dotenv = require("dotenv")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const eventRoute = require("./routes/eventRoute.js")


dotenv.config()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to MONGO"))
  .catch((err) => console.log(err));
  
app.use("/events", eventRoute)
// app.use("/events", )

app.listen("5000", () => {
    console.log("Server running");
  });