import React from 'react';
import Layout from '../Layout';
import ProductTable from '@/Components/ProductTable/ProductTable';

const Machinery = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Manage Machinery</h2>
            <p className="mt-2 text-lg text-gray-600">
              Manage your product inventory, update prices, and track stock levels.
            </p>
          </div>

          {/* Add New Product Button */}
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Add New Machinery
          </button>
        </div>

        {/* Product Table */}
         

          {/* Product Table */}
          <ProductTable />
        </div>
    </Layout>
  );
};

export default Machinery;
