import dotenv from 'dotenv';
import mongoose from "mongoose";

//?  config dotenv 
dotenv.config();

const connect = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT_URL); // connect to db 

    const { connection } = await mongoose // we bring connection to db from mongoose
    connection.once('open', () => {
      console.log('Connected to MongoDB sucessful ✅ ')

      connection.on('error', () => {
        console.error('Error connecting to MongoDB ❌ ', error)
      })
    })
  } catch (error) {
    console.error('Error connecting to MongoDB: 🔥  ', error)
  }
};

export { connect };

