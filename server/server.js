import express from "express";
import "dotenv/config";
import cors from "cors"
import http from "http"
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import {Server} from "socket.io";


// Create express app and http server

const app = express();
const server = http.createServer(app);


// Initialize socket.io  Server
export const io = new Server(server , {
    cors:{origin: "*" }
});

// Store online Users
export const userSocketMap = {};  // {userId , socketId}

// Socket.io connection Handler
io.on("connection" , (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("User Connected",userId);

    if(userId){4
        userSocketMap[userId] = socket.id;
    }

    // Emit online Users to all connected client
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    socket.on("disconnect" , () =>{
        console.log("User Disconnected",userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })

})



// Middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());


// Route Setup
app.use("/api/status" , (req,res) =>res.send("Server is Live.."));
app.use("/api/auth" ,userRouter);
app.use("/api/messages", messageRouter);   

// Connect to Mongo DB
 await connectDB();

const PORT = process.env.PORT || 5000 ;

server.listen(PORT , () => console.log("Server is Running on PORT : "+ PORT));






