'use client'
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import CreateProduct from '../CreateProduct/CreateProduct';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import CreateMachine from '../CreateMachine/CreateMachine';

const ProductTable = ({ name }) => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showAddMachine, setShowAddMachine] = useState(false)

  const handleAddProduct = () => {
    setShowAddProduct(true)
  }
  const handleDelete = () => {
    setShowDeleteModal(true)
  }
  const handleAddMachine = () => {
    setShowAddMachine(true);
  };
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center rounded-3xl justify-between px-6 py-10 border-b bg-green-50">
        <div className="">
          <h3 className="text-2xl font-semibold text-green-800">{name} List</h3>
          <p className="text-sm text-gray-600">Below is a list of all the products in your inventory.</p>
        </div>
        <div className="flex flex-col justify-end items-center ">
          <button className='py-2 px-3 bg-green-600 text-white mb-3 rounded-lg' onClick={handleAddProduct}>Add New Product</button>
          <div className='flex space-x-2'>
            <input
              type="text"
              placeholder="Search Products"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className='bg-green-600 text-white rounded-lg p-2 '>
              <CiSearch className="text-white " size={22} />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-3xl">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-green-50 text-gray-600">
              <th className="py-3 px-4 text-center">Icon</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Slug</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array(10).fill().map((_, index) => (
              <tr key={index} className="border-b hover:bg-green-50">
                <td className="py-4 px-4 text-center">
                  <img src="/blank.png" width="30" alt="icon" className="mx-auto" />
                </td>
                <td className="py-4 px-4 font-medium text-gray-700">title</td>
                <td className="py-4 px-4 font-medium text-gray-700">description</td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 rounded-full bg-green-300 text-white hover:bg-blue-300 transition duration-150" onClick={handleAddProduct} >
                      <CiEdit size={20} />
                    </button>
                    <button className="p-2 rounded-full bg-red-200 text-red-600 hover:bg-red-300 transition duration-150" onClick={handleDelete}>
                      <FaTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
               
            <CreateProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct} />
        
        <DeleteProduct showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />
      </div>
    </div>
  );
};

export default ProductTable;
