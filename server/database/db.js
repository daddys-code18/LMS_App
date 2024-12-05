import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB Connected SuccessFully");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default connectDB;
