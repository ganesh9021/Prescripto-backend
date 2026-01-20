import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected!");
  });

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "prescripto",
  });

  console.log(`MongoDB connected to database: ${mongoose.connection.name}`);
};

export default connectDB;
