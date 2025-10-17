import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connected Successfully ✅");
    } catch (error) {
        console.error("MongoDB Connection failed ❌");
        process.exit(1);
    }
}

export default connectDB;