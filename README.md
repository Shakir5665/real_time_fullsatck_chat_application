# 💬 Real-Time FullStack Chat Application

<div align="center">

![Node](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green)
![React](https://img.shields.io/badge/React-%3E%3D19.0.0-61dafb)
![MongoDB](https://img.shields.io/badge/MongoDB-%3E%3D5.0-green)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8-black)

A modern, feature-rich real-time chat application built with the **MERN stack** (MongoDB, Express, React, Node.js) featuring WebSocket-powered instant messaging, user authentication, image sharing, and real-time online status tracking.

### 🎬 [Live Demo](https://real-time-fullsatck-chat-applicatio.vercel.app/) • [Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [User Guide](#-user-guide) • [API Documentation](#-api-documentation) • [Deployment](#-deployment)

</div>

---

## 🌟 Key Features

### Real-Time Communication

- **🚀 Instant Messaging**: Lightning-fast message delivery using Socket.io WebSockets
- **👥 Online Status**: Real-time presence detection showing who's active
- **💬 Live Chat**: See instant message delivery and user presence updates
- **📨 Message History**: Full conversation history stored persistently in MongoDB

### User Management

- **🔐 Secure Authentication**: JWT-based auth with bcryptjs password hashing
- **👤 User Profiles**: Customizable profiles with profile pictures and bio
- **📷 Profile Management**: Upload and manage profile images via Cloudinary
- **🔍 User Discovery**: Browse all registered users and view their profiles

### Media & Content

- **🖼️ Image Sharing**: Send photos and images directly in conversations
- **⚡ Optimized Images**: Automatic image compression and optimization via Cloudinary CDN
- **🎨 Preview Support**: Image previews before sending

### User Experience

- **📱 Responsive Design**: Fully responsive mobile-first UI with Tailwind CSS
- **🎯 Intuitive Interface**: Clean, modern design with smooth interactions
- **🔔 Toast Notifications**: Real-time feedback for all user actions
- **🌈 Modern UI**: Glass-morphism design with backdrop blur effects
- **⌨️ Accessibility**: Full keyboard support and semantic HTML

---

## 🛠️ Tech Stack

### Frontend

| Technology           | Version | Purpose                           |
| -------------------- | ------- | --------------------------------- |
| **React**            | 19.1+   | UI library with hooks             |
| **Vite**             | 7.1+    | Fast build tool & dev server      |
| **Tailwind CSS**     | 4.1+    | Utility-first CSS framework       |
| **Socket.io Client** | 4.8+    | Real-time WebSocket communication |
| **React Router**     | 7.8+    | Client-side routing               |
| **Axios**            | 1.11+   | HTTP client for API requests      |
| **React Hot Toast**  | 2.6+    | Toast notifications               |

### Backend

| Technology     | Version | Purpose                        |
| -------------- | ------- | ------------------------------ |
| **Node.js**    | 18.0+   | JavaScript runtime             |
| **Express**    | 5.1+    | Web framework                  |
| **Socket.io**  | 4.8+    | Real-time communication server |
| **MongoDB**    | 5.9+    | NoSQL database                 |
| **Mongoose**   | 8.18+   | MongoDB ODM                    |
| **JWT**        | 9.0+    | Authentication tokens          |
| **bcryptjs**   | 3.0+    | Password hashing               |
| **Cloudinary** | 2.7+    | Image hosting & CDN            |

---

## 🎬 Live Demo

### Try it Now!

Experience the chat application live without any setup:

**🚀 [Launch Live Demo](https://real-time-fullsatck-chat-applicatio.vercel.app/)**

### Demo Credentials (Optional)

```
Email: demo@example.com
Password: dem123
```

Or create your own account directly in the demo!

### What You Can Do in the Demo

✅ Sign up and create an account  
✅ Upload a profile picture  
✅ Add a bio to your profile  
✅ Browse all registered users  
✅ Send messages in real-time  
✅ Share images in conversations  
✅ See online/offline status  
✅ View full message history

> **Note**: Demo data is reset periodically. For persistent data, deploy your own instance.

---

## 📁 Project Structure

```
Real-Time FullStack_Chat_Applicaion/
├── .github/
│   └── workflows/
│       └── keep-alive.yml          # GitHub Actions for keeping server alive
│
├── client/                          # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx                 # Main app component with routes
│   │   ├── main.jsx                # React entry point
│   │   ├── index.css               # Global styles
│   │   ├── pages/
│   │   │   ├── HomePage.jsx        # Main chat interface
│   │   │   ├── LoginPage.jsx       # Login/signup authentication
│   │   │   └── ProfilePage.jsx     # User profile management
│   │   ├── components/
│   │   │   ├── Sidebar.jsx         # User list & selection
│   │   │   ├── ChatContainer.jsx   # Message display & input
│   │   │   └── RightSidebar.jsx    # Selected user info
│   │   ├── context/
│   │   │   ├── AuthContext.jsx     # Global auth state
│   │   │   └── ChatContext.jsx     # Global chat state
│   │   ├── lib/
│   │   │   └── utils.js            # Helper utilities
│   │   └── assets/
│   │       └── assets.js           # Asset references
│   ├── index.html                  # HTML template
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.js              # Vite configuration
│   ├── eslint.config.js            # ESLint rules
│   └── vercel.json                 # Vercel deployment config
│
├── server/                          # Express backend
│   ├── server.js                   # Server entry point & Socket.io setup
│   ├── package.json                # Backend dependencies
│   ├── .env.example                # Environment variables template
│   ├── vercel.json                 # Vercel deployment config
│   ├── routes/
│   │   ├── userRoutes.js           # User authentication & profile endpoints
│   │   └── messageRoutes.js        # Message sending & retrieval endpoints
│   ├── controllers/
│   │   ├── userController.js       # User business logic
│   │   └── messageController.js    # Message business logic
│   ├── models/
│   │   ├── User.js                 # User Mongoose schema
│   │   └── Message.js              # Message Mongoose schema
│   ├── middleware/
│   │   └── auth.js                 # JWT verification middleware
│   └── lib/
│       ├── db.js                   # MongoDB connection setup
│       ├── cloudinary.js           # Cloudinary configuration
│       └── utils.js                # Helper utilities
│
├── README.md                        # Documentation
└── .gitignore                       # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **MongoDB** (Local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)

### Third-Party Services

You'll need accounts for:

1. **MongoDB Atlas** - Cloud MongoDB database
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create a cluster and get connection string

2. **Cloudinary** - Image hosting & CDN
   - Sign up at https://cloudinary.com/
   - Get your Cloud Name, API Key, and API Secret

### Installation & Setup

#### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/Real-Time-Chat-App.git
cd "Real-Time FullStack_Chat_Applicaion"
```

#### Step 2: Backend Configuration

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp

# JWT
JWT_SECRET=your_super_secret_jwt_key_min_32_characters

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server Config
PORT=5000
NODE_ENV=development

# Client URL
CLIENT_URL=http://localhost:5173
```

**Finding Your Credentials:**

- **MONGODB_URI**: Get from MongoDB Atlas → Connect → Connection String
- **CLOUDINARY_CLOUD_NAME, API_KEY, API_SECRET**: Get from Cloudinary Dashboard → Settings → API Keys

#### Step 3: Frontend Configuration

```bash
cd ../client
npm install
```

Create a `.env.local` file in the client directory:

```env
VITE_SERVER_URL=http://localhost:5000
```

### Running the Application

#### Development Mode

**Terminal 1 - Start Backend Server:**

```bash
cd server
npm run server
```

Server will start at: `http://localhost:5000`

**Terminal 2 - Start Frontend Development Server:**

```bash
cd client
npm run dev
```

Frontend will start at: `http://localhost:5173`

**Terminal 3 (Optional) - Health Check:**

```bash
curl http://localhost:5000/health
```

#### Production Build

**Build Frontend:**

```bash
cd client
npm run build
npm run preview
```

**Build Backend:**

```bash
cd server
npm run start
```

---

## 📖 User Guide

### Account Creation & Authentication

#### Creating an Account

1. **Open the Application**
   - Navigate to `http://localhost:5173` in your browser

2. **Click "Sign Up"**
   - Enter a valid email address
   - Create a strong password (minimum 6 characters)
   - Confirm your password
   - Click "Sign Up" button

3. **Account Verification**
   - Your account is created immediately
   - You can now log in with your credentials

#### Logging In

1. **Enter Credentials**
   - Email: Your registered email
   - Password: Your account password

2. **Click "Login"**
   - You'll be redirected to the chat interface

3. **Session Management**
   - Your session is maintained in local storage
   - Refresh the page to restore your session

### Setting Up Your Profile

#### Adding Profile Information

1. **Access Profile Settings**
   - Click your avatar/name in the top-right corner
   - Select "Profile" or "Settings"

2. **Update Profile Picture**
   - Click "Change Picture" or the camera icon
   - Select an image from your device
   - Image is automatically uploaded to Cloudinary
   - Click "Save"

3. **Add Bio**
   - Click the bio input field
   - Enter a short biography (up to 200 characters)
   - Click "Save Bio"

4. **Verify Changes**
   - Your profile picture appears in the sidebar
   - Bio is visible when others view your profile

### Finding & Messaging Users

#### Browsing Users

1. **View User List**
   - All registered users are displayed in the left sidebar
   - Green dot indicates online status
   - Click any user to open conversation

2. **Search Users** (if available)
   - Use the search bar to find users by name or email
   - Results update in real-time

#### Sending Messages

1. **Select a User**
   - Click a user in the sidebar
   - Chat window opens on the right side

2. **Type a Message**
   - Click in the message input field at the bottom
   - Type your message
   - Message is visible in real-time as you type

3. **Send Message**
   - Press `Enter` key OR click "Send" button
   - Message appears instantly in chat window
   - Message is stored in database for history

4. **Message Status**
   - ✓ Message sent
   - ✓✓ Message delivered
   - ✓✓ (blue) Message read

#### Sending Images

1. **Select Image Option**
   - Click the image/attachment icon in chat input
   - Select image from your device

2. **Preview Image**
   - Image preview appears before sending
   - You can cancel and select different image

3. **Send Image**
   - Click "Send" button
   - Image is uploaded to Cloudinary
   - Compressed image appears in chat

4. **View Images**
   - Click any image in chat to view full size
   - Images are optimized for fast loading

### Real-Time Features

#### Online Status

1. **View Online Users**
   - Green indicator next to user names
   - Updates in real-time as users connect/disconnect

2. **Your Status**
   - Your name appears at top with online indicator
   - Status changes when you go offline

#### Live Notifications

1. **Message Notifications**
   - Toast notification appears when message received
   - Sound alert can be enabled in settings

2. **User Events**
   - "User joined" notifications
   - "User is typing" status (if enabled)

### Chat Interface Overview

```
┌─────────────────────────────────────────────────┐
│                    HEADER                       │
│              User Profile & Settings            │
└─────────────────────────────────────────────────┘
│                                                   │
│  SIDEBAR          │  CHAT WINDOW    │  USER INFO │
│  ─────────────    │  ────────────    │  ──────── │
│  • User 1 🟢      │  Message 1       │  Name:    │
│  • User 2 🔴      │  Message 2       │  Email:   │
│  • User 3 🟢      │  [Image]         │  Bio:     │
│                   │  Input field     │  Online:  │
│                   │  [Send]          │  ────────│
│                                                   │
└─────────────────────────────────────────────────┘
```

---

## 🔐 Security & Privacy

### Authentication & Authorization

- **Password Security**: All passwords hashed using bcryptjs with salt rounds
- **JWT Tokens**: Issued on login, verified on each protected request
- **Token Storage**: Securely stored in browser localStorage
- **CORS Protection**: Cross-Origin Resource Sharing properly configured

### Data Protection

- **HTTPS Required**: Always use HTTPS in production
- **Environment Variables**: Sensitive data stored in `.env` files (never committed)
- **Database Security**: MongoDB Atlas with IP whitelisting
- **Image Security**: Cloudinary secure URL signing

### Best Practices for Users

1. **Strong Passwords**
   - Use minimum 8 characters
   - Mix of uppercase, lowercase, numbers, symbols
   - Never reuse passwords

2. **Account Safety**
   - Log out on shared devices
   - Clear browser cache regularly
   - Don't share your profile link on untrusted sites

---

## 🔌 Real-Time Features Architecture

### Socket.io Implementation

The application uses Socket.io for instant, bidirectional communication:

```
Client ←→ Socket.io ←→ Server ←→ Database
   ↓                      ↓
 React App          Node.js/Express
```

### Event Handling

| Event            | Emitter | Listener | Purpose                  |
| ---------------- | ------- | -------- | ------------------------ |
| `connection`     | Client  | Server   | User connects            |
| `getOnlineUsers` | Server  | Client   | Updates online user list |
| `disconnect`     | Client  | Server   | User goes offline        |
| `sendMessage`    | Client  | Server   | New message sent         |
| `receiveMessage` | Server  | Client   | New message received     |
| `userTyping`     | Client  | Server   | User typing indicator    |

---

## 📊 Database Schema

### User Model

```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  fullName: String (required),
  password: String (hashed, required, minlength: 6),
  profilePic: String (Cloudinary URL, default: ""),
  bio: String (optional),
  createdAt: Date (timestamp),
  updatedAt: Date (timestamp)
}
```

### Message Model

```javascript
{
  _id: ObjectId,
  senderId: ObjectId (reference to User),
  receiverId: ObjectId (reference to User),
  text: String,
  image: String (Cloudinary URL, optional),
  seen: Boolean (default: false),
  createdAt: Date (timestamp),
}
```

---

## 📡 API Documentation

### Base URL

```
Development: http://localhost:5000
Production: https://your-api-domain.com
```

### Authentication Header

All protected endpoints require:

```
Authorization: Bearer <jwt_token>
```

### User Endpoints

#### Register User

```http
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "fullName": "John Doe",
  "password": "securePassword123"
}

Response: { userId, token, user: {...} }
```

#### Login User

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}

Response: { userId, token, user: {...} }
```

#### Get User Profile

```http
GET /api/auth/profile
Authorization: Bearer <token>

Response: { user: {...} }
```

#### Update Profile

```http
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "fullName": "Jane Doe",
  "bio": "New bio text",
  "profilePic": "cloudinary_url"
}

Response: { user: {...} }
```

#### Get All Users

```http
GET /api/auth/users
Authorization: Bearer <token>

Response: { users: [...] }
```

### Message Endpoints

#### Send Message

```http
POST /api/messages/send
Authorization: Bearer <token>
Content-Type: application/json

{
  "text": "Hello!",
  "image": "cloudinary_url (optional)",
  "receiverId": "user_id"
}

Response: { message: {...} }
```

#### Get Conversation

```http
GET /api/messages/:userId
Authorization: Bearer <token>

Response: { messages: [...] }
```

#### Mark Message as Seen

```http
PUT /api/messages/:messageId/seen
Authorization: Bearer <token>

Response: { message: {...} }
```

#### Health Check (No Auth Required)

```http
GET /health

Response: { status: "OK" }
```

---

## 🚀 Deployment

### Deploying to Vercel

Both frontend and backend are pre-configured for Vercel deployment.

#### Prerequisites

- Vercel account (https://vercel.com/)
- GitHub repository connected to Vercel

#### Deploy Backend

1. **Connect Repository**

   ```bash
   vercel login
   cd server
   vercel
   ```

2. **Configure Environment Variables**
   - In Vercel Dashboard → Project Settings → Environment Variables
   - Add all `.env` variables:
     - `MONGODB_URI`
     - `JWT_SECRET`
     - `CLOUDINARY_CLOUD_NAME`
     - `CLOUDINARY_API_KEY`
     - `CLOUDINARY_API_SECRET`
     - `CLIENT_URL`

3. **Deploy**
   ```bash
   vercel --prod
   ```

#### Deploy Frontend

1. **Update API URL**
   - In `client/.env.local`:

   ```env
   VITE_SERVER_URL=https://your-backend.vercel.app
   ```

2. **Deploy**
   ```bash
   cd client
   vercel --prod
   ```

#### Setting Up GitHub Actions Keep-Alive

To prevent your Render database from spinning down:

1. A GitHub Actions workflow is pre-configured at `.github/workflows/keep-alive.yml`

2. **Configure the workflow:**
   - Update the URL to your production server
   - Commit and push to GitHub

3. **Verify**
   - Go to GitHub → Actions tab
   - Check that "Keep Server Alive" runs every 14 minutes

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Authentication**
  - [ ] Sign up with new account
  - [ ] Login with credentials
  - [ ] Logout functionality
  - [ ] Session persistence on refresh

- [ ] **Messaging**
  - [ ] Send text message
  - [ ] Message appears in real-time
  - [ ] Message history persists
  - [ ] Send multiple messages

- [ ] **Image Sharing**
  - [ ] Upload image successfully
  - [ ] Image preview before send
  - [ ] Image displays in chat
  - [ ] Large images handle correctly

- [ ] **User Management**
  - [ ] Update profile picture
  - [ ] Update bio
  - [ ] View other user profiles
  - [ ] Browse user list

- [ ] **Real-Time Features**
  - [ ] Online status updates
  - [ ] Multiple users online
  - [ ] Disconnect handling
  - [ ] Message delivery to recipient

- [ ] **Responsive Design**
  - [ ] Desktop view (1920px+)
  - [ ] Tablet view (768px - 1024px)
  - [ ] Mobile view (375px - 576px)
  - [ ] Touch interactions work

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Backend won't start

**Problem**: `Error: ENOENT: no such file or directory`

**Solution**:

```bash
cd server
rm -rf node_modules package-lock.json
npm install
npm run server
```

#### Port already in use

**Problem**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solution**:

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

#### MongoDB connection error

**Problem**: `MongoNetworkError: connect ECONNREFUSED`

**Solutions**:

1. Check MongoDB Atlas IP whitelist includes your IP
2. Verify connection string in `.env`
3. Ensure MongoDB is running (local) or cluster is active (Atlas)

#### Images not uploading

**Problem**: `Cloudinary API error`

**Solutions**:

1. Verify Cloudinary credentials in `.env`
2. Check file size < 10MB
3. Allowed formats: JPG, PNG, GIF, WebP
4. Check Cloudinary account is not suspended

#### Socket.io connection timeout

**Problem**: `Socket.io error: websocket connection timeout`

**Solutions**:

1. Verify CORS settings in server
2. Check firewall allows WebSocket connections
3. Ensure CLIENT_URL in `.env` matches actual client URL
4. Try disabling browser extensions

#### CORS errors in console

**Problem**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**: Verify `allowedOrigins` in `server/server.js` includes your frontend URL

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork the Repository**

   ```bash
   git clone https://github.com/yourusername/fork.git
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit Changes**

   ```bash
   git commit -m 'Add AmazingFeature'
   ```

5. **Push to Branch**

   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open Pull Request**
   - Describe changes clearly
   - Link related issues
   - Request review from maintainers

### Code Style Guidelines

- **JavaScript**: Use ES6+ syntax
- **Naming**: camelCase for variables, PascalCase for components
- **Comments**: JSDoc style for functions
- **Formatting**: Use Prettier (configured in project)

---

## 📝 License

This project is licensed under the **ISC License** - see the LICENSE file for details.

---

## 👨‍💻 Author

Created with ❤️ by the Development Team

---

## 📞 Support & Contact

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas
- **Email**: support@example.com
- **Discord**: Join our community server

---

## 🎯 Roadmap

### Upcoming Features

- [ ] Message search functionality
- [ ] Message reactions (emoji)
- [ ] Group chat support
- [ ] Voice/Video calling
- [ ] End-to-end encryption
- [ ] Message pinning
- [ ] Read receipts improvements
- [ ] Dark/Light theme toggle
- [ ] Push notifications
- [ ] User blocking feature

### Performance Improvements

- [ ] Message pagination
- [ ] Image lazy loading
- [ ] Database indexing optimization
- [ ] WebSocket compression

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Socket.io Documentation](https://socket.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)

---

<div align="center">

**[⬆ Back to top](#-real-time-fullstack-chat-application)**

**Last Updated**: April 2026

</div>
