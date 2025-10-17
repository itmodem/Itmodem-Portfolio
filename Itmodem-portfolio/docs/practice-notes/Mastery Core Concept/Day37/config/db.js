import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true, // Mistakes
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connected Successfully ✅");
  } catch (err) {
    console.error("MongoDb Connection failed ❌",err) // Mistakes
    process.exit(1)
  }
}

export default connectDB;