import React from "react";
import Layout from "../layout";
import CreateProduct from "@/Components/CreateProduct/CreateProduct";

const Logout = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Logout</h2>
        <p className="text-gray-600">Are you sure you want to log out?</p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-4">
          Confirm Logout
        </button>
      </div>
      <CreateProduct />
    </Layout>
  );
};

export default Logout;
