const mongoose = require("mongoose");
const config = require("./keys");
const db = config.mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true,
        
        });
    } catch (error) {
        console.log("Connection Failed!");
        process.exit(1);
        
    }
};

module.exports = connectDB;