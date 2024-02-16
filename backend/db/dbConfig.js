import mongoose from "mongoose";

const connectDB =async ()=>{
  try{
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connectd at ${connect.connection.host}`);
  } catch(e){
  console.log("error while conecting to mongodb " ,e.message)
  }

}

export default connectDB;