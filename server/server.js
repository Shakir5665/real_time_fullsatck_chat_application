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
    cors:{
        origin: function(origin, callback) {
            const allowedOrigins = [
                process.env.CLIENT_URL || "http://localhost:5173",
                "http://localhost:5173",
                "http://localhost:3000"
            ];
            
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(null, true); // Allow for development
            }
        },
        credentials: true,
        methods: ["GET", "POST"]
    }
});

// Store online Users
export const userSocketMap = {};  // {userId , socketId}

// Socket.io connection Handler
io.on("connection" , (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("User Connected",userId);

    if(userId){  // Fixed: removed the '4' typo
        userSocketMap[userId] = socket.id;
    }

    // Emit online Users to all connected client
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    socket.on("disconnect" , () =>{
        console.log("User Disconnected",userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });

});



// Middleware setup
app.use(express.json({limit: "4mb"})); 

// CORS Configuration - Allow requests from frontend
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:5173",
  "http://localhost:5173",
  "http://localhost:3000"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === "development") {
      callback(null, true);
    } else {
      callback(new Error("CORS policy violation"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  optionsSuccessStatus: 200
}));

// Route Setup
app.use("/api/status" , (req,res) =>res.send("Server is Live.."));
app.get("/health", (req, res) => res.status(200).json({ status: "OK" })); // GitHub Actions keep-alive endpoint
app.use("/api/auth" ,userRouter);
app.use("/api/messages", messageRouter);   

// Connect to Mongo DB
await connectDB();

if(process.env.NODE_ENV !== "production"){
    const PORT = process.env.PORT || 5000;
    server.listen(PORT , () => console.log("Server is Running on PORT : "+ PORT));
}



// Export server for vercel
export default server;