import mongoose from 'mongoose';

const mongoURI = process.env.VITE_MONGODB_URL

async function connectDB() {
  await mongoose.connect(mongoURI);
  console.log("Connected to Database.");
};


export default connectDB