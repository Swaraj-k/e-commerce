const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");


// Middleware to parse request body as JSON
app.use(express.json());

//Route Imports
const productRoute = require("./routes/productRoute");


app.use("/api/v1",productRoute);

//Middleware for Error
app.use(errorMiddleware);


module.exports = app;