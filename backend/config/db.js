
import mongoose from "mongoose";
const connectDB =async () =>{
  try{
    await  mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb Atlas connected");
   
  }catch(error){
    console.error("MongoDb connection failed: " ,error.massage);
    process.exit(1);
  }
};

export  default connectDB;