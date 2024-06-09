// express server

// const express = require("express");
// const dotenv = require("dotenv");   because we are using type = modules in .json
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/api/auth/signup", (req, res) => {
//     console.log("signup route");
// });    this can we done as well but we will use another method -> middlelayers


// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello Worldddd!");
// });


app.use(express.json());            // to parse the incoming requests with JSON payloads   (from req.body)  
app.use(cookieParser());            // to parse the incoming cookies from req.cookies

app.use("/api/auth", authRoutes);   // these are middlewares
app.use("/api/messages", messageRoutes);

// app.listen(PORT,() => console.log(`Server Running on port ${PORT}`)); earlier it was like this

app.listen(PORT,() => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
});

// npm install nodemon --save-dev we do this so that our server auto reloads and reflects if we make any change in the code and we don't need to terminate/restart the server again
