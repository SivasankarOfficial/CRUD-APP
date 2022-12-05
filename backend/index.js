///3rd party module
const express = require("express");
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())

const morgan = require("morgan")
//router
const router = require("./Router")
//body-parser
app.use(express.json())

app.use("/info", router)
//midleWare
app.use(morgan('dev'))

app.use("/", (req, res) => {

    res.json("welcome fullstack");
})
//listen port
app.listen(5000, (err) => {
    if (!err) {
        console.log("server started on 5000");
    }
    else {
        console.log(err);
        console.log("Error Occured");

    }
})
//DB connection
mongoose.connect("mongodb://0.0.0.0/crudApp", (err) => {
    if (err) {
        console.log(err);
        console.log("error Occured");
    }
    else {
        console.log("DB connected Successfully...!");
    }
})