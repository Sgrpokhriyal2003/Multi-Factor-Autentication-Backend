import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongodb connected successfully: ${conn.connection.host}`)
    }
    catch(error){
        console.log("error while connecting to db", error.message);
        process.exit(1)
    }
} 

export default connectDB