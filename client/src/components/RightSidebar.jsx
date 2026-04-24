import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const RightSidebar = () => {
  const { selectedUser, messages } = useContext(ChatContext);
  const { logout, onlineUsers } = useContext(AuthContext);

  const [msgImages, setMsgImages] = useState([]);

  useEffect(() => {
    setMsgImages(messages.filter((msg) => msg.image).map((msg) => msg.image));
  }, [messages]);

  return (
    selectedUser && (
      <div className="h-full flex flex-col bg-gradient-to-b from-emerald-50/50 to-white border-l border-emerald-200/40 overflow-y-auto max-md:hidden premium-shadow-sm">
        {/* Profile Section */}
        <div className="p-6 border-b border-emerald-200/40 text-center bg-white/70 backdrop-blur-md sticky top-0 z-10 premium-shadow-sm">
          <div className="relative inline-block mb-4">
            {selectedUser?.profilePic ? (
              <img
                src={selectedUser.profilePic}
                alt={selectedUser.fullName}
                className="w-24 h-24 rounded-2xl border-4 border-emerald-300/60 object-cover shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-2xl border-4 border-emerald-300/60 flex items-center justify-center text-5xl shadow-md bg-gradient-to-br from-green-200 to-emerald-300">
                👤
              </div>
            )}
            {onlineUsers.includes(selectedUser._id) && (
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white online-indicator"></div>
            )}
          </div>

          <h2 className="text-lg font-bold text-slate-800 mb-1">
            {selectedUser.fullName}
          </h2>
          <p
            className={`text-xs font-semibold ${
              onlineUsers.includes(selectedUser._id)
                ? "text-emerald-600"
                : "text-slate-500"
            }`}
          >
            {onlineUsers.includes(selectedUser._id) ? "● Online" : "● Offline"}
          </p>

          <p className="text-sm text-slate-600 mt-4 leading-relaxed px-2">
            {selectedUser.bio || "No bio available"}
          </p>
        </div>

        {/* Media Section */}
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="text-lg"></span> Shared Media (
              {msgImages.length})
            </h3>

            {msgImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {msgImages.map((url, index) => (
                  <div
                    key={index}
                    onClick={() => window.open(url, "_blank")}
                    className="relative group cursor-pointer rounded-lg overflow-hidden"
                  >
                    <img
                      src={url}
                      alt="shared"
                      className="w-full h-24 object-cover group-hover:scale-110 transition duration-300 border border-emerald-200/60"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-slate-400">
                <div className="text-3xl mb-2"></div>
                <p className="text-sm">No media shared yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-emerald-200/40 bg-white/70 backdrop-blur-md premium-shadow-sm">
          <button
            onClick={() => logout()}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/15 to-red-600/15 border border-red-400/30 text-red-600 hover:border-red-400/50 hover:bg-red-500/25 font-semibold rounded-lg transition duration-300 text-sm"
          >
            <span></span> Logout
          </button>
        </div>
      </div>
    )
  );
};

export default RightSidebar;
