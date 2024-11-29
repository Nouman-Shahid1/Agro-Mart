"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaShoppingCart, FaStore } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [activeForm, setActiveForm] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gray-900">
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-fixed filter brightness-50 ${
          activeForm === "buyer" ? "bg-blue-900" : "bg-purple-900"
        }`}
        style={{
          backgroundImage:
            "url('https://images6.alphacoders.com/134/thumb-1920-1347850.png')",
        }}
      ></div>
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-800/30 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      <div className="relative">
        <div className="relative z-20 pt-30 my-8 flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex mb-8 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-full p-1 shadow-md relative">
            {/* Buyer Button */}
            <button
              onClick={() => setActiveForm("buyer")}
              className={`relative flex-1 px-6 py-3 rounded-full text-center font-semibold text-sm transition-all duration-300 ease-in-out transform flex items-center justify-center gap-2 ${
                activeForm === "buyer"
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-transparent text-white hover:bg-white/20"
              }`}
            >
              <FaShoppingCart size={18} />
              Buyer
            </button>

            {/* Seller Button */}
            <button
              onClick={() => setActiveForm("seller")}
              className={`relative flex-1 px-6 py-3 rounded-full text-center font-semibold text-sm transition-all duration-300 ease-in-out transform flex items-center justify-center gap-2 ${
                activeForm === "seller"
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-transparent text-white hover:bg-white/20"
              }`}
            >
              <FaStore size={18} />
              Seller
            </button>
          </div>

          {/* Animated Form */}
          <motion.div
            className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border border-white/18 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-8 max-w-[400px] w-full text-center space-y-8 transform hover:shadow-xl transition-shadow"
            key={activeForm}
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Form Title */}
            <h2 className="text-3xl text-green-400 font-extrabold text-gray-800">
              {activeForm === "buyer" ? "Welcome Buyer!" : "Welcome Seller!"}
            </h2>
            <p className="text-white">
              {activeForm === "buyer"
                ? "Enjoy personalized recommendations, hassle-free shopping, and exclusive deals tailored just for you."
                : "Effortlessly manage your store, analyze performance, and connect with a growing community of buyers."}
            </p>

            {/* Form Fields */}
            <form className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-left text-white font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full text-gray-800 bg-transparent border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-left text-white font-medium mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full text-gray-800 bg-transparent border-b-2 border-white shadow-3xl focus:py-2 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                >
                  {showPassword ? (
                    <FaEyeSlash size={24} color={"white"} />
                  ) : (
                    <FaEye size={24} color={"white"} />
                  )}
                </button>
              </div>

              {/* Unique Input Fields */}
              {activeForm === "seller" && (
                <>
                  <div>
                    <label className="block text-left text-white font-medium mb-1">
                      Store Name
                    </label>
                    <input
                      id="storeName"
                      type="text"
                      className="w-full text-gray-800 bg-transparent border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-white font-medium mb-1">
                      Contact Number
                    </label>
                    <input
                      id="contactNumber"
                      type="text"
                      className="w-full text-gray-800 bg-transparent border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:ring-2 focus:ring-green-500 transition-transform transform hover:scale-105"
              >
                {activeForm === "buyer"
                  ? "Log In as Buyer"
                  : "Log In as Seller"}
              </button>
            </form>

            {/* Footer Links */}
            <div className="flex justify-between items-center text-sm text-white">
              <Link href="#" className="hover:text-green-500">
                Forgot Password?
              </Link>
              <Link href="/signup" className="hover:text-green-500">
                Create an Account
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
