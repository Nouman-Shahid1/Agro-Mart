'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
    const [activeForm, setActiveForm] = useState('buyer');
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
                    backgroundImage:
                        "url('https://images6.alphacoders.com/134/thumb-1920-1347850.png')",
                }}
            ></div>
            <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-800/30 to-black opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-bounce-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-bounce-slow-reverse"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
            <div className="relative">
                <div className="absolute top-10 left-10 w-12 h-12 bg-green-400 rounded-full blur-lg opacity-50 animate-ping"></div>
                <div className="absolute bottom-20 right-20 w-16 h-16 bg-green-500 rounded-full blur-lg opacity-30 animate-pulse"></div>

                <div className="relative z-20 pt-30 my-8 flex flex-col items-center justify-center min-h-[80vh]">

                    <div className="flex mb-4 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm  rounded-full p-1 shadow-md">
                        <button
                            onClick={() => setActiveForm("buyer")}
                            className={`flex-1 px-4 py-2 rounded-full text-center font-semibold text-sm transition-all duration-300 ease-in-out transform ${activeForm === "buyer"
                                ? "bg-green-700 text-white shadow-lg "
                                : "bg-transparent text-white "
                                }`}
                        >
                            Buyer
                        </button>
                        <button
                            onClick={() => setActiveForm("seller")}
                            className={`flex-1 px-4 py-2 rounded-full text-center  text-sm transition-all font-bold duration-300 ease-in-out transform ${activeForm === "seller"
                                ? "bg-green-700 text-white shadow-lg "
                                : "bg-transparent text-white "
                                }`}
                        >
                            Seller
                        </button>
                    </div>

                    <div className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border border-white/18 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-8 max-w-[400px] w-full text-center space-y-8 transform hover:shadow-xl transition-shadow">
                        {/* Form Title */}
                        <h2 className="text-3xl text-green-400 font-extrabold text-gray-800">
                            {activeForm === 'buyer' ? 'Buyer Login' : 'Seller Login'}
                        </h2>
                        <p className="text-white">
                            {activeForm === 'buyer'
                                ? 'Log in to explore and shop your favorite products.'
                                : 'Log in to manage your store and track your performance.'}
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
                                    className="w-full  text-gray-800 bg-transparent  border-b-2 border-white shadow-4xl focus:py-2  focus:outline-none "
                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <label className="block text-left text-white font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}

                                    className="w-full  text-gray-800 bg-transparent  border-b-2 border-white shadow-3xl focus:py-2  focus:outline-none "
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    aria-label={showPassword ? 'Hide Password' : 'Show Password'}
                                >
                                    {showPassword ? <FaEyeSlash size={24} color={'white'} /> : <FaEye size={24} color={'white'} />}
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3  bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:ring-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                            >
                                {activeForm === 'buyer' ? 'Login as Buyer' : 'Login as Seller'}
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
                    </div>
                </div>
            </div>
        </div>
    );
}
