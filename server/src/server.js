import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/dbConfig.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
// use of global error handler
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ message });
})
 