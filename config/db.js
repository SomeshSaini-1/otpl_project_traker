const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log("connect to db");
    } catch (error) {
        console.error("server error : ",error);
        process.exit(1);
    }
}

module.exports = connectDB;