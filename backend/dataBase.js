import { config } from 'dotenv';
import mongoose from 'mongoose';
config()
const mongoURI = process.env.MONGODB_URL

async function connectDB() {
  await mongoose.connect(mongoURI);
  console.log("Connected to Database.");
};


export default connectDB