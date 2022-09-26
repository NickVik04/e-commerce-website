const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();


app.get("/",(req,res)=>{
    res.send("My Webite is Running!");
})
