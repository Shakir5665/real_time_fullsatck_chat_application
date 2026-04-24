import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);

  const [selectedImg, setSelectedImg] = useState("");
  const [name, setName] = useState(authUser.fullName);
  const [bio, setBio] = useState(authUser.bio);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!selectedImg) {
      await updateProfile({ fullName: name, bio });
      navigate("/");
      setIsLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedImg);
    reader.onload = async () => {
      const base64Image = reader.result;
      await updateProfile({ profilePic: base64Image, fullName: name, bio });
      navigate("/");
      setIsLoading(false);
    };
  };

  const profileImage = selectedImg
    ? URL.createObjectURL(selectedImg)
    : authUser?.profilePic;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="premium-shadow rounded-3xl p-8 md:p-12 border border-emerald-200/60 animate-fadeInUp bg-white">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Edit Profile
              </h1>
              <p className="text-slate-600 text-sm mt-2">
                Customize your profile information
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-slate-600 hover:text-emerald-600 transition text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12">
            {/* Left Side - Profile Picture */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-48 h-48 rounded-2xl object-cover shadow-xl border-4 border-emerald-300/60"
                  />
                ) : (
                  <div className="w-48 h-48 rounded-2xl border-4 border-emerald-300/60 flex items-center justify-center text-7xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-500">
                    👤
                  </div>
                )}
                <label
                  htmlFor="avatar"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2"></div>
                    <p className="text-white text-sm font-semibold">
                      Click to change
                    </p>
                  </div>
                </label>
                <input
                  onChange={(e) => setSelectedImg(e.target.files[0])}
                  type="file"
                  id="avatar"
                  accept="image/*"
                  hidden
                />
              </div>

              <div className="text-center">
                <p className="text-slate-800 font-semibold text-lg">
                  {name || "Your Name"}
                </p>
                <p className="text-slate-600 text-sm">Profile Avatar</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="group">
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Full Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-emerald-300/60 rounded-xl focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300/50 text-slate-800 placeholder-slate-400 group-hover:border-emerald-400/60 transition"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="group">
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Bio
                </label>
                <textarea
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-emerald-300/60 rounded-xl focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300/50 text-slate-800 placeholder-slate-400 group-hover:border-emerald-400/60 transition resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-600 transition duration-300 premium-shadow hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="flex-1 py-3 bg-slate-100 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
