import React, { useContext, useEffect, useRef, useState } from "react";
import { formatMessageTime } from "../lib/utils";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ChatContainer = () => {
  const { messages, selectedUser, setSelectedUser, sendMessages, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);

  const scrollEnd = useRef();
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return null;

    setIsSending(true);
    await sendMessages({ text: input.trim() });
    setInput("");
    setIsSending(false);
  };

  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Select an Image File");
      return;
    }
    setIsSending(true);
    const reader = new FileReader();

    reader.onloadend = async () => {
      await sendMessages({ image: reader.result });
      e.target.value = "";
      setIsSending(false);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (scrollEnd.current && messages) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return selectedUser ? (
    <div className="h-full flex flex-col relative bg-gradient-to-b from-emerald-50/50 to-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 py-3 sm:py-4 px-3 sm:px-6 border-b border-emerald-200/40 bg-white/70 backdrop-blur-md premium-shadow-sm">
        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
          {selectedUser?.profilePic ? (
            <img
              src={selectedUser.profilePic}
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-emerald-300/60 object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-full border-2 border-emerald-300 flex items-center justify-center text-sm bg-gradient-to-br from-green-200 to-emerald-300 flex-shrink-0">
              👤
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
              {selectedUser.fullName}
            </h3>
            <p
              className={`text-xs ${onlineUsers.includes(selectedUser._id) ? "text-emerald-600 font-medium" : "text-slate-500"}`}
            >
              {onlineUsers.includes(selectedUser._id)
                ? "● Active now"
                : "● Offline"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setSelectedUser(null)}
          className="md:hidden p-2 hover:bg-emerald-100 rounded-lg transition text-slate-600 hover:text-emerald-600 flex-shrink-0"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-gradient-to-b from-emerald-50/30 to-white">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3">
            <div className="text-5xl sm:text-6xl mb-2 opacity-20">💬</div>
            <p className="text-sm sm:text-base font-medium text-slate-500">
              Start a conversation
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Send a message to get started
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-2 sm:gap-3 items-end ${msg.senderId === authUser._id ? "justify-end" : "justify-start"} message-scale`}
            >
              {msg.senderId !== authUser._id && (
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 border border-emerald-400/60">
                  👤
                </div>
              )}

              <div
                className={`flex flex-col ${msg.senderId === authUser._id ? "items-end" : "items-start"} max-w-[70%] sm:max-w-md`}
              >
                {msg.image ? (
                  <img
                    src={msg.image}
                    alt="shared"
                    className="max-w-full rounded-2xl border border-emerald-200/60 shadow-md hover:shadow-lg transition object-cover"
                  />
                ) : (
                  <div
                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-sm max-w-full break-words text-sm sm:text-base ${
                      msg.senderId === authUser._id
                        ? "bg-gradient-to-r from-green-700 to-emerald-500 text-white rounded-br-none"
                        : "bg-slate-100 text-slate-800 rounded-bl-none border border-emerald-200/60"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                )}
                <p className="text-xs text-slate-400 mt-1">
                  {formatMessageTime(msg.createdAt)}
                </p>
              </div>

              {msg.senderId === authUser._id && (
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 border border-emerald-400/60">
                  👤
                </div>
              )}
            </div>
          ))
        )}
        <div ref={scrollEnd} />
      </div>

      {/* Input Area */}
      <div className="px-3 sm:px-6 py-3 sm:py-4 border-t border-emerald-200/40 bg-white/70 backdrop-blur-md premium-shadow-sm">
        <form
          onSubmit={handleSendMessage}
          className="flex items-end gap-2 sm:gap-3"
        >
          <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-emerald-300/60 rounded-full px-3 sm:px-4 py-2 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-300/50 transition">
            <label
              htmlFor="image"
              className="cursor-pointer text-slate-400 hover:text-emerald-600 transition text-base sm:text-lg flex-shrink-0"
            >
              📎
            </label>
            <input
              onChange={handleSendImage}
              type="file"
              id="image"
              accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
              hidden
            />
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey ? handleSendMessage(e) : null
              }
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-slate-800 placeholder-slate-400 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            disabled={isSending || input.trim() === ""}
            className="p-2.5 sm:p-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full hover:from-green-700 hover:to-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex-shrink-0"
          >
            {isSending ? (
              <div className="w-5 h-5 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16350143 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5951061 3.19218622,10.7522035 3.50612381,10.7522035 L16.6915026,11.5376905 C16.6915026,11.5376905 17.1624089,11.5376905 17.1624089,12.0089827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="h-full hidden md:flex flex-col items-center justify-center gap-4 text-slate-400 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="text-5xl sm:text-6xl mb-4 opacity-20"></div>
      <h3 className="text-lg sm:text-xl font-semibold text-green-600">
        Select a conversation
      </h3>
      <p className="text-sm text-gray-600">
        Choose a contact to start messaging
      </p>
    </div>
  );
};

export default ChatContainer;
