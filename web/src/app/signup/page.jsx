'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignupPage() {
    const [activeForm, setActiveForm] = useState("buyer");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="min-h-screen relative overflow-hidden font-sans bg-gray-900">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed filter brightness-50"
                style={{
                    backgroundImage: "url('https://images6.alphacoders.com/134/thumb-1920-1347850.png')",
                }}
            ></div>
            <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-800/30 to-black opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-bounce-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-bounce-slow-reverse"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
            <div className="relative ">
                <div className="absolute top-10 left-10 w-12 h-12 bg-green-400 rounded-full blur-lg opacity-50 animate-ping"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-green-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative z-20 pt-[30px] my-8 flex flex-col items-center justify-center min-h-[80vh]">

                    <div className="flex mb-4 bg-white rounded-full p-1 shadow-md">
                        <button
                            onClick={() => setActiveForm("buyer")}
                            className={`flex-1 px-4 py-2 rounded-full text-center font-semibold text-sm transition-all duration-300 ease-in-out transform ${activeForm === "buyer"
                                ? "bg-green-500 text-white shadow-lg "
                                : "bg-white text-black opacity-75"
                                }`}
                        >
                            Buyer
                        </button>
                        <button
                            onClick={() => setActiveForm("seller")}
                            className={`flex-1 px-4 py-2 rounded-full text-center font-semibold text-sm transition-all duration-300 ease-in-out transform ${activeForm === "seller"
                                ? "bg-green-500 text-white shadow-lg "
                                : "bg-white text-black  opacity-75"
                                }`}
                        >
                            Seller
                        </button>
                    </div>

                    <div className="backdrop-blur-3xl shadow-2xl rounded-lg p-8 max-w-md w-full text-center space-y-6">
                        <h2 className="text-4xl font-extrabold text-green-400">
                            {activeForm === "buyer" ? "Join as a Buyer" : "Join as a Seller"}
                        </h2>
                        <p className="text-blue-100">
                            {activeForm === "buyer"
                                ? "Discover amazing deals and shop with ease. Create your account to get started."
                                : "Start selling your products and reach a wider audience. Create your account today."}
                        </p>


                        <form className="space-y-3 ">
                            <div className="flex gap-4">
                                <div >
                                    <label className="block text-left text-blue-100 font-semibold mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 placeholder:text-gray-800 border border-green-500 rounded-md shadow-sm text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter your FIrst Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-left text-blue-100 font-semibold mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 placeholder:text-gray-800 border border-green-500 rounded-md shadow-sm text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter your Last Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-left text-blue-100 font-semibold mb-1">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-3 placeholder:text-gray-800 border border-green-500 rounded-md shadow-sm text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="relative">
                                <label className="block text-left text-blue-100 font-semibold mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-3 placeholder:text-gray-800 border border-green-500 rounded-md shadow-sm text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-10 right-3 text-green-500 hover:text-green-700 focus:outline-none"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24}/>}
                                </button>
                            </div>
                            <div>
                                <label className="block text-left text-blue-100 font-semibold mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-3 placeholder:text-gray-800 border border-green-500 rounded-md shadow-sm text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-10 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
                            >
                                {activeForm === "buyer" ? "Sign Up as Buyer" : "Sign Up as Seller"}
                            </button>
                        </form>

                        <div className="flex justify-end items-center text-sm text-blue-200">

                            <Link href="/login" className="hover:text-blue-100">
                                Create an Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
