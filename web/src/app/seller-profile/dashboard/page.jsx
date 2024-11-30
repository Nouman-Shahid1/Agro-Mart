import React from "react";
import Layout from "../layout";
import ProfileCard from "@/Components/ProfileCard/ProfileCard";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">
          Dashboard Overview
        </h2>
        <p className="text-gray-600">
          Welcome to your dashboard. Here you can view your stats and quick
          insights.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <ProfileCard title="Total Sales" value="$15,000" />
          <ProfileCard title="Orders" value="120" />
          <ProfileCard title="Products Listed" value="45" />
          <ProfileCard title="Customers" value="300+" />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
