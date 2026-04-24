import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, unseenMessages } =
    useContext(ChatContext);
  const [input, setInput] = useState("");
  const { logout, onlineUsers } = useContext(AuthContext);
  const navigate = useNavigate();

  const filteredUser = input
    ? users.filter((user) =>
        user.fullName?.toLowerCase().includes(input.toLowerCase()),
      )
    : users;

  useEffect(() => {
    getUsers();
  }, [onlineUsers]);

  return (
    <div
      className={`h-full flex flex-col bg-gradient-to-b from-white to-emerald-50/50 border-r-2 border-emerald-200/40 ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-emerald-200/40 sticky top-0 z-20 bg-white/70 backdrop-blur-md premium-shadow-sm">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
            QuickChat.
          </div>
          <div className="relative group ">
            <button className="p-2 hover:bg-emerald-100 rounded-lg transition text-slate-600 hover:text-emerald-60 ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
            <div className="absolute top-full right-0 z-20 w-48 mt-0 rounded-xl bg-white border border-emerald-200/40 shadow-xl hidden group-hover:block overflow-hidden premium-shadow">
              <button
                onClick={() => navigate("/profile")}
                className="w-full text-left px-4 py-2 hover:bg-emerald-50 text-slate-700 font-medium transition border-b border-emerald-100/60"
              >
                Edit Profile
              </button>
              <button
                onClick={() => logout()}
                className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 font-medium transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-emerald-300/60 rounded-full focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300/50 text-slate-800 placeholder-slate-400 transition"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
            
          </span>
        </div>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto">
        {filteredUser.length > 0 ? (
          filteredUser.map((user) => (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`flex gap-3 p-3 m-2 rounded-xl cursor-pointer transition ${
                selectedUser?._id === user._id
                  ? "bg-emerald-100/60 border border-emerald-300/60"
                  : "hover:bg-emerald-50/60 border border-transparent"
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt={user.fullName}
                    className="w-12 h-12 rounded-full object-cover border border-emerald-300/60"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full border border-emerald-300/60 flex items-center justify-center text-lg bg-gradient-to-br from-green-200 to-emerald-300">
                    👤
                  </div>
                )}
                {onlineUsers.includes(user._id) && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white online-indicator"></div>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-800 truncate">
                    {user.fullName}
                  </h3>
                  {unseenMessages[user._id] && unseenMessages[user._id] > 0 && (
                    <div className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      {unseenMessages[user._id]}
                    </div>
                  )}
                </div>
                <p
                  className={`text-xs ${
                    onlineUsers.includes(user._id)
                      ? "text-emerald-600 font-medium"
                      : "text-slate-500"
                  }`}
                >
                  {onlineUsers.includes(user._id) ? "● Online" : "● Offline"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2 p-4">
            <div className="text-3xl">🔍</div>
            <p className="text-sm">
              {input ? "No contacts found" : "No conversations yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
