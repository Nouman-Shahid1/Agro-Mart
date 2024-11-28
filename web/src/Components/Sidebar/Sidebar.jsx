import React from 'react';
import { FaTractor, FaSeedling, FaAppleAlt, FaWater, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', icon: <FaSeedling />, path: '/seller-profile/dashboard' },
    { label: 'Products', icon: <FaAppleAlt />, path: '/seller-profile/products' },
    { label: 'Machinery', icon: <FaTractor />, path: '/seller-profile/machinery' },
    { label: 'Orders', icon: <FaTractor />, path: '/seller-profile/orders' },
    { label: 'Earnings', icon: <FaWater />, path: '/seller-profile/earnings' },
    { label: 'Settings', icon: <FaCogs />, path: '/seller-profile/settings' },
    { label: 'Logout', icon: <FaSignOutAlt />, path: '/seller-profile/logout' },
  ];

  return (
    <aside className="fixed  flex flex-col md:w-72 bg-green-50 h-screen shadow-lg">
      {/* Header Section */}
      <div className="py-6 px-4 ">
        <div className="flex justify-center">
       
          <div className="ml-3">
            <img src="/logo.png" alt="" />
            {/* <h2 className="text-xl font-bold text-green-900">Agro Mart</h2>
            <p className="text-sm text-green-800">Smart Farming Solutions</p> */}
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <div className="group relative flex items-center w-full px-4 py-3 mb-2 cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 bg-green-300 text-green-800">
                {item.icon}
              </div>

              <span className="ml-4 text-sm font-medium transition-all duration-300 text-green-900">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="py-4 border-t border-green-500 text-center">
        <p className="text-sm text-green-800">© 2024 Agro Mart</p>
      </div>
    </aside>
  );
};

export default Sidebar;
