'use client'
import React, { useState } from 'react';
import Layout from '../Layout';
import ProductTable from '@/Components/ProductTable/ProductTable';
import CreateProduct from '@/Components/CreateProduct/CreateProduct';

const Products = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const handleAddProduct = () => {
    setShowAddProduct(true)
  }
  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Manage Products</h2>
            <p className="mt-2 text-lg text-gray-600">
              Manage your product inventory, update prices, and track stock levels.
            </p>
          </div>
          <button
            onClick={handleAddProduct}
            className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Add New Product
          </button>
        </div>
        <CreateProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct} />

        <ProductTable name={'Product'} product={true}/>
      </div>
    </Layout>
  );
};

export default Products;
