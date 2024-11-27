import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-green-0 to-green-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 ml-[290px] overflow-y-auto">
        <div className="bg-white shadow-lg rounded-md p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
