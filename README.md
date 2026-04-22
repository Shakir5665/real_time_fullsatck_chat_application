# Real-Time FullStack Chat Application

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green)
![React](https://img.shields.io/badge/react-%3E%3D19.0.0-61dafb)

A modern, feature-rich real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) with WebSocket support for instant messaging.

## 🌟 Features

- **Real-Time Messaging**: Instant message delivery using Socket.io WebSockets
- **User Authentication**: Secure JWT-based authentication with bcryptjs password hashing
- **User Profiles**: Create and manage user profiles with profile pictures and bio
- **Online Status**: See who's online in real-time
- **Image Sharing**: Send images directly in chat using Cloudinary
- **Message History**: Persistent message storage with MongoDB
- **Responsive UI**: Mobile-friendly interface with Tailwind CSS
- **Toast Notifications**: User feedback with react-hot-toast
- **Message Status**: Track if messages have been seen

## 🛠️ Tech Stack

### Frontend

- **React 19.1** - UI library with hooks
- **Vite 7.1** - Fast build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Socket.io Client 4.8** - Real-time WebSocket communication
- **React Router 7.8** - Client-side routing
- **Axios 1.11** - HTTP client for API requests
- **React Hot Toast 2.6** - Toast notifications

### Backend

- **Node.js** - JavaScript runtime
- **Express 5.1** - Web framework
- **Socket.io 4.8** - Real-time communication server
- **MongoDB & Mongoose 8.18** - Database and ODM
- **JWT 9.0** - Authentication tokens
- **bcryptjs 3.0** - Password hashing
- **Cloudinary 2.7** - Image hosting and CDN
- **Nodemon 3.1** - Development auto-reload
- **CORS 2.8** - Cross-origin resource sharing

## 📁 Project Structure

```
Real-Time FullStack_Chat_Applicaion/
├── client/                          # React frontend
│   ├── src/
│   │   ├── App.jsx                 # Main app component with routes
│   │   ├── main.jsx                # React entry point
│   │   ├── index.css               # Global styles
│   │   ├── pages/
│   │   │   ├── HomePage.jsx        # Main chat interface
│   │   │   ├── LoginPage.jsx       # Login/signup page
│   │   │   └── ProfilePage.jsx     # User profile management
│   │   ├── components/
│   │   │   ├── Sidebar.jsx         # User list sidebar
│   │   │   ├── ChatContainer.jsx   # Message display area
│   │   │   └── RightSidebar.jsx    # User info sidebar
│   │   ├── context/
│   │   │   ├── AuthContext.jsx     # Auth state management
│   │   │   └── ChatContext.jsx     # Chat state management
│   │   ├── lib/
│   │   │   └── utils.js            # Utility functions
│   │   └── assets/
│   ├── index.html                  # HTML template
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # ESLint rules
│   └── vercel.json                 # Vercel deployment config
│
├── server/                          # Express backend
│   ├── server.js                   # Server entry point
│   ├── package.json                # Backend dependencies
│   ├── vercel.json                 # Vercel deployment config
│   ├── routes/
│   │   ├── userRoutes.js           # User endpoints
│   │   └── messageRoutes.js        # Message endpoints
│   ├── controllers/
│   │   ├── userController.js       # User logic
│   │   └── messageController.js    # Message logic
│   ├── models/
│   │   ├── User.js                 # User schema
│   │   └── Message.js              # Message schema
│   ├── middleware/
│   │   └── auth.js                 # JWT verification middleware
│   └── lib/
│       ├── db.js                   # MongoDB connection
│       ├── cloudinary.js           # Cloudinary config
│       └── utils.js                # Utility functions
│
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Real-Time\ FullStack_Chat_Applicaion
   ```

2. **Backend Setup**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the server directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PORT=5000
   NODE_ENV=development
   ```

3. **Frontend Setup**

   ```bash
   cd ../client
   npm install
   ```

   Create a `.env.local` file in the client directory:

   ```env
   VITE_SERVER_URL=http://localhost:5000
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd server
   npm run server
   ```

   Server runs on `http://localhost:5000`

2. **In a new terminal, start the frontend development server**

   ```bash
   cd client
   npm run dev
   ```

   Frontend runs on `http://localhost:5173`

3. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

## 📱 Usage

1. **Sign Up**: Create a new account with email and password
2. **Set Profile**: Add a profile picture and bio
3. **Browse Users**: View all registered users in the sidebar
4. **Send Messages**: Select a user and start chatting in real-time
5. **Share Images**: Click the image button to share photos
6. **View Status**: See which users are online

## 🔐 Authentication

- Passwords are hashed using **bcryptjs** with salt rounds
- JWT tokens are issued upon login
- Tokens are stored in the client and sent with each request
- Protected routes require valid JWT tokens

## 🔌 Real-Time Features

The application uses **Socket.io** for real-time communication:

- **User Connection**: Users are tracked when they connect
- **Online Status**: All connected clients receive online user list updates
- **Message Broadcasting**: Messages are instantly sent to recipients
- **Disconnect Handling**: User is removed from online list when disconnected

## 📊 Database Schema

### User Model

```javascript
{
  email: String (unique, required),
  fullName: String (required),
  password: String (required, minlength: 6),
  profilePic: String (default: ""),
  bio: String,
  timestamps: true
}
```

### Message Model

```javascript
{
  senderId: ObjectId (reference to User),
  receiverId: ObjectId (reference to User),
  text: String,
  image: String,
  seen: Boolean (default: false),
  timestamps: true
}
```

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Modern dark interface for better UX
- **Toast Notifications**: Non-intrusive user feedback
- **Smooth Animations**: Backdrop blur and transitions
- **Grid Layout**: Adaptive layout that adjusts based on screen size

## 🛳️ Deployment

Both client and frontend are configured for **Vercel** deployment:

- `client/vercel.json` - Frontend deployment config
- `server/vercel.json` - Backend deployment config

### Deploying Frontend

```bash
cd client
npm run build
vercel deploy
```

### Deploying Backend

```bash
cd server
vercel deploy
```

## 📝 API Endpoints

### User Routes

- `POST /api/users/signup` - Create new account
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/online` - Get online users

### Message Routes

- `POST /api/messages/send` - Send message
- `GET /api/messages/:userId` - Get conversation history
- `PUT /api/messages/:messageId/seen` - Mark message as seen

## 🐛 Development

### Code Quality

```bash
cd client
npm run lint  # Check linting issues
```

### Available Scripts

**Client:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

**Server:**

- `npm run server` - Start with Nodemon (auto-reload)
- `npm start` - Start server

## 📦 Build

### Frontend Build

```bash
cd client
npm run build
```

Output: `client/dist/`

### Backend

No build step required. Run directly with Node.js.

## 🔒 Security Considerations

- Passwords hashed with bcryptjs
- JWT token-based authentication
- CORS enabled for secure cross-origin requests
- Environment variables for sensitive data
- Input validation on backend
- Message encryption ready for future implementation

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👤 Author

Your Name - [GitHub](https://github.com/yourusername)

## 📞 Support

For support, email support@example.com or open an issue in the repository.

## 🗺️ Roadmap

- [ ] End-to-end message encryption
- [ ] Group chat support
- [ ] Voice/video calling
- [ ] File sharing capabilities
- [ ] Message search functionality
- [ ] User presence indicators
- [ ] Message reactions/emojis
- [ ] Dark/Light theme toggle
- [ ] Typing indicators
- [ ] Message forwarding

## 🙏 Acknowledgments

- React and Vite communities
- Socket.io documentation
- Tailwind CSS framework
- Cloudinary for image hosting
- MongoDB for database

---

**Last Updated**: April 2026
