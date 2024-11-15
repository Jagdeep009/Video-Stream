import {DB_NAME} from "../constant.js"
import mongoose from "mongoose"

const connectDB = async () => {
    try{
        const connecttionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connection Established");
        console.log(connecttionInstance.connection.host);
    }
    catch(error) {
        console.log(error);
    }
}

export default connectDB;