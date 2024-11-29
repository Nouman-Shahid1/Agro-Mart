"use client";

import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import ProfileCard from "@/Components/ProfileCard/ProfileCard";
import OrderCard from "@/Components/OrderCard/OrderCard";

const SellerProfile = () => {
    const [activeSection, setActiveSection] = useState("dashboard");

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    // Sections mapping for cleaner structure
    const sections = {
        dashboard: <Dashboard />,
        products: <Products />,
        machinery: <Machine/>,
        orders: <Orders />,
        earnings: <Earnings />,
        settings: <Settings />,
        logout: <Logout />,
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-b from-green-0 to-green-300">  
            <Sidebar
                activeSection={activeSection}
                handleSectionChange={handleSectionChange}
            />

            <main className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white shadow-lg rounded-md p-6">
                    {sections[activeSection]}
                </div>
            </main>
        </div>
    );
};

export default SellerProfile;

/* Components for Each Section */

const Dashboard = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Dashboard Overview</h2>
        <p className="text-gray-600">
            Welcome to your dashboard. Here you can view your stats and quick insights.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ProfileCard title="Total Sales" value="$15,000" />
            <ProfileCard title="Orders" value="120" />
            <ProfileCard title="Products Listed" value="45" />
            <ProfileCard title="Customers" value="300+" />
        </div>
    </div>
);

const Products = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Manage Products</h2>
        <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
            Add New Product
        </button>
        <p className="mt-4 text-gray-600">
            Manage your product inventory, update prices, and track stock levels.
        </p>
    </div>
);
const Machine = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Manage Products</h2>
        <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
            Add New Machine
        </button>
        <p className="mt-4 text-gray-600">
            Manage your product inventory, update prices, and track stock levels.
        </p>
    </div>
);
const Orders = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Orders</h2>
        <p className="text-gray-600">View and manage customer orders here.</p>
        <ul className="mt-4 space-y-2">
            <OrderCard orderId="12345" status="Shipped" />
            <OrderCard orderId="12346" status="Processing" />
            <OrderCard orderId="12347" status="Delivered" />
        </ul>
    </div>
);

const Earnings = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Earnings</h2>
        <p className="text-gray-600">Track your earnings and payouts here.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            <div className="bg-green-200 p-6 rounded-lg shadow-xl transition duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-green-800">Monthly Earnings</h4>
                <p className="text-xl font-bold text-green-700">$3,000</p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-xl transition duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-green-800">Yearly Earnings</h4>
                <p className="text-xl font-bold text-green-700">$36,000</p>
            </div>
           
        </div>
    </div>
);

const Settings = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Settings</h2>
        <p className="text-gray-600">
            Update your profile, password, and preferences here.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
            Update Profile
        </button>
    </div>
);

const Logout = () => (
    <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Logout</h2>
        <p className="text-gray-600">Are you sure you want to log out?</p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-4">
            Confirm Logout
        </button>
    </div>
);






