const express = require("express");

const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
connectDB();

//Defining Routes and API
app.use("/api/user", require("./routes/userApi"));
app.use("/api/Product", require("./routes/ProductApi"));


app.get("/",(req,res) =>{
    res.send("Welcome to my Website!");
});

app.listen(PORT, () =>{
    console.log(`Server is listening at port ${PORT}`);
});

