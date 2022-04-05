require("dotenv").config();
require("./config/database").connect();
const cors = require("cors");
const express = require("express");
// import route from "./routes/index.js";


const app = express();



app.use(cors());

app.use(express.json());

app.use("/", require("./routes/index"));

// const User = require("./model/user");

// app.post("/register", (req, res) => {


// });

// app.post("/post", (req,))


module.exports = app;