// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// export const connectDB = async () => {
//   try {
//     console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging

//     if (!process.env.MONGODB_URI) {
//       throw new Error("MONGODB_URI is undefined. Check your .env file.");
//     }

//     const conn = await mongoose.connect(process.env.MONGODB_URI, {
//       // These options are no longer needed in Mongoose 6+
//     });

//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("Error: MONGODB_URI is undefined. Check your .env file.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      dbName: "chat_db", // Optional: specify DB name explicitly
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
