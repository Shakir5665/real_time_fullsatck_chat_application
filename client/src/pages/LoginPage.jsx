import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (currentState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
    setIsLoading(true);
    await login(currentState === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="flex flex-col items-center md:items-start justify-center gap-6 animate-fadeInUp order-2 md:order-1">
            <div className="flex items-center gap-4">
              {/* Logo Icon */}
              <div className="w-20 md:w-30 h-15 md:h-30 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-5xl md:text-6xl shadow-lg hover:shadow-green-500/40 transition">
                📨
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  QuickChat
                </h1>
                <p className="text-slate-400 text-sm">
                  Real-time messaging hub
                </p>
              </div>
            </div>

            <div className="space-y-4 w-full md:max-w-sm">
              <p className="text-slate-700 leading-relaxed">
                Connect with friends instantly. Share moments, ideas, and
                conversations in real-time with our modern, secure platform.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-400/10 flex items-center justify-center text-orange-600">
                    ⚡
                  </div>
                  <span className="text-sm">Lightning-fast messaging</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500/20 to-rose-400/10 flex items-center justify-center text-rose-600">
                    🔒
                  </div>
                  <span className="text-sm">End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center text-amber-600">
                    🌐
                  </div>
                  <span className="text-sm">Online presence indicator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <form
            onSubmit={onSubmitHandler}
            className="premium-shadow p-8 md:p-10 flex flex-col gap-6 rounded-2xl shadow-xl backdrop-blur-md animate-slideInRight order-1 md:order-2 border border-emerald-200/60 bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {currentState === "Sign up"
                    ? "Create Account"
                    : "Welcome Back"}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {currentState === "Sign up"
                    ? "Join our community"
                    : "Sign in to continue"}
                </p>
              </div>
              {isDataSubmitted && (
                <button
                  type="button"
                  onClick={() => setIsDataSubmitted(false)}
                  className="p-2 hover:bg-green-900/40 rounded-lg transition text-slate-400 hover:text-green-400"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}
            </div>

            <div className="space-y-4 pt-4">
              {currentState === "Sign up" && !isDataSubmitted && (
                <div className="group">
                  <label className="text-xs font-semibold text-slate-700 block mb-2">
                    Full Name
                  </label>
                  <input
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-emerald-300/60 rounded-xl focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300/50 text-slate-800 placeholder-slate-400 group-hover:border-emerald-400/60 transition"
                    placeholder="Mohamed"
                    required
                  />
                </div>
              )}

              {!isDataSubmitted && (
                <>
                  <div className="group">
                    <label className="text-xs font-semibold text-slate-700 block mb-2">
                      Email Address
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="w-full px-4 py-3 bg-slate-50 border border-emerald-300/60 rounded-xl focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300/50 text-slate-800 placeholder-slate-400 group-hover:border-emerald-400/60 transition"
                      placeholder="demo@example.com"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="text-xs font-semibold text-slate-700 block mb-2">
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      className="w-full px-4 py-3 bg-slate-50 border border-emerald-300/60 rounded-xl focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300/50 text-slate-800 placeholder-slate-400 group-hover:border-emerald-400/60 transition"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </>
              )}

              {currentState === "Sign up" && isDataSubmitted && (
                <div className="group">
                  <label className="text-xs font-semibold text-slate-700 block mb-2">
                    Bio
                  </label>
                  <textarea
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-emerald-300/60 rounded-xl focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300/50 text-slate-800 placeholder-slate-400 group-hover:border-emerald-400/60 transition resize-none"
                    placeholder="Tell us about yourself..."
                    required
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-600 transition duration-300 premium-shadow hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                  Processing...
                </span>
              ) : currentState === "Sign up" ? (
                isDataSubmitted ? (
                  "Create Account"
                ) : (
                  "Continue"
                )
              ) : (
                "Sign In"
              )}
            </button>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-emerald-300 bg-slate-50 cursor-pointer accent-emerald-500"
                required
              />
              <label
                htmlFor="terms"
                className="text-xs text-slate-600 cursor-pointer"
              >
                I agree to the{" "}
                <span className="text-emerald-600 hover:underline font-semibold">
                  terms
                </span>{" "}
                &{" "}
                <span className="text-emerald-600 hover:underline font-semibold">
                  privacy policy
                </span>
              </label>
            </div>

            <div className="pt-4 border-t border-emerald-200/60">
              {currentState === "Sign up" ? (
                <p className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      setCurrentState("Login");
                      setIsDataSubmitted(false);
                    }}
                    className="font-semibold text-emerald-600 hover:text-green-700 cursor-pointer transition"
                  >
                    Sign In
                  </span>
                </p>
              ) : (
                <p className="text-sm text-slate-600">
                  Don't have an account?{" "}
                  <span
                    onClick={() => {
                      setCurrentState("Sign up");
                      setIsDataSubmitted(false);
                    }}
                    className="font-semibold text-emerald-600 hover:text-green-700 cursor-pointer transition"
                  >
                    Create one
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
