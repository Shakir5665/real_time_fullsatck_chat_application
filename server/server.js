import express from "express";
import "dotenv/config";
import cors from "cors"
import http from "http"
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";


// Create express app and http server

const app = express();
const server = http.createServer(app);

// Middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());


// Route Setup
app.use("/api/status" , (req,res) =>res.send("Server is Live.."));
app.use("/api/auth" ,userRouter);

// Connect to Mongo DB
 await connectDB();

const PORT = process.env.PORT || 5000 ;

server.listen(PORT , () => console.log("Server is Running on PORT : "+ PORT));






