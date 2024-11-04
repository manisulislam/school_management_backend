import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectDb= async()=>{
    try {
        const connectInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`mongodb connected successfully ${connectInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connect failed")
        throw new Error("Mongodb connection failed");
        
    }

}

export default connectDb;