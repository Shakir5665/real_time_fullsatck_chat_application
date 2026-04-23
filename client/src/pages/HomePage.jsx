import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import { ChatContext } from "../../context/ChatContext";

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext);

  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row items-center justify-center sm:px-4 sm:py-8 relative overflow-hidden bg-gradient-to-br from-white to-emerald-50/50">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-emerald-100/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full sm:max-w-7xl h-screen sm:h-[90vh]">
        <div className="premium-shadow rounded-none sm:rounded-3xl h-full border border-emerald-200/60 overflow-hidden flex flex-col sm:flex-row bg-white">
          {/* Sidebar */}
          <div
            className={`${selectedUser ? "max-md:hidden" : ""} w-full md:w-80`}
          >
            <Sidebar />
          </div>

          {/* Chat Container */}
          <div className={`flex-1 ${!selectedUser ? "max-md:hidden" : ""}`}>
            <ChatContainer />
          </div>

          {/* Right Sidebar - Profile */}
          {selectedUser && (
            <div className="max-md:hidden w-full md:w-72">
              <RightSidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
