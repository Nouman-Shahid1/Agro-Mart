'use client';
import React from 'react';
import AdminDashboardCard from '@/Components/AdminDashboardCard/AdminDashboardCard';
import { FaTruck, FaCog, FaSeedling, FaCogs, FaUserAlt, FaWarehouse } from "react-icons/fa";
import AdminProfile from '@/Components/AdminProfile/AdminProfile';

const categories = [
  { label: "Machines", icon: FaCogs, path: "/admin/machines" },
  { label: "Seeds", icon: FaSeedling, path: "/admin/seeds" },
  { label: "Crops", icon: FaWarehouse, path: "/admin/crops" },
  { label: "Pesticides", icon: FaCog, path: "/admin/pesticides" },
  { label: "Rentals", icon: FaTruck, path: "/admin/rentals" },
  { label: "Users", icon: FaUserAlt, path: "/admin/users" },
];

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br p-4 md:p-8 from-green-50 to-green-100 overflow-auto">
      <AdminProfile/>
      {/* Main Content */}
      <main className="container mx-auto  md:px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {categories.map((category) => (
            <AdminDashboardCard
              key={category.label}
              details={{
                name: category.label,
                icon: category.icon,
                url: category.path,
              }}
            />
          ))}
        </div>
        
      </main>
    </div>
  );
}
