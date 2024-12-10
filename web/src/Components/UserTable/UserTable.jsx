"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
<<<<<<< HEAD
import { FaEye, FaEyeSlash,FaPlusCircle  } from "react-icons/fa"; 
import CreateUser from '../CreateUser/CreateUser';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
=======
import UserModal from "../CreateUser/CreateUser";
import DeleteModal from "../DeleteProduct/DeleteProduct";
import { fetchUsers, deleteUser } from "../../reducers/Auth/authSlice";
>>>>>>> 4cbb89ed43b5f1171cf35d253fbb07315474e54b

const UserTable = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'create' or 'update'
  const [selectedUser, setSelectedUser] = useState(null); // User for update
  const [showDeleteModal, setShowDeleteModal] = useState(false);
<<<<<<< HEAD
  const [showPassword, setShowPassword] = useState(false); 
=======
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers())
      .unwrap() // Unwraps the result of the thunk to access the payload or error
      .then((data) => {
        console.log("Fetched users:", data); // Log the fetched users
      })
      .catch((error) => {
        console.error("Error fetching users:", error); // Log any error
      });
  }, [dispatch]);
>>>>>>> 4cbb89ed43b5f1171cf35d253fbb07315474e54b

  const handleAddUser = () => {
    setModalType("create");
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setModalType("update");
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = (ID) => {
    setUserIdToDelete(ID);
    setShowDeleteModal(true);
  };

  const confirmDeleteUser = () => {
    dispatch(deleteUser(userIdToDelete));
    setShowDeleteModal(false);
  };

  return (
    <div className="p-6 z-50">
     <div className="mb-6 flex flex-col lg:flex-row items-center justify-between px-6 py-8 bg-gradient-to-r from-green-500 via-lime-400 to-emerald-600 text-white rounded-3xl shadow-lg">
        <div>
<<<<<<< HEAD
          <h3 className="text-3xl font-bold">User List</h3>
          <p className="text-sm">Manage all your User here.</p>
=======
          <h3 className="text-2xl font-semibold text-green-800">User List</h3>
          <p className="text-sm text-gray-600">
            Below is a list of all the users in your system.
          </p>
>>>>>>> 4cbb89ed43b5f1171cf35d253fbb07315474e54b
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <button
            className="py-2 px-4 bg-white text-green-600 rounded-lg shadow-md hover:bg-green-100 transition duration-150 flex items-center space-x-2"
            onClick={
              handleAddUser
            }
          >
            <FaPlusCircle />
            <span>Add Rental
            </span>
          </button>

<<<<<<< HEAD
          {/* Search Input */}
          <div className="flex items-center mt-3 md:mt-0">
            <input
              type="text"
              placeholder="Search Rental"
              className="w-[200px] md:w-[250px] px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg">
              <CiSearch size={22} />
            </button>
=======
          <div className="flex space-x-2">
            <div className="flex flex-wrap">
              <input
                type="text"
                placeholder="Search User"
                className="px-4 py-2 w-[200px] md:w-[250px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="bg-green-600 text-white rounded-lg p-2">
              <CiSearch className="text-white" size={22} />
            </div>
>>>>>>> 4cbb89ed43b5f1171cf35d253fbb07315474e54b
          </div>
        </div>
      </div>
     
      <div className="overflow-x-auto bg-white shadow-md rounded-3xl">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-green-50 text-gray-600">
              <th className="py-3 px-4 text-center">ID</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Password</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.ID || index} className="border-b hover:bg-green-50">
                <td className="py-4 px-4 text-center">{user.ID}</td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  {user.Email}
                </td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  {user.Username}
                </td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  {user.Role}
                </td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  <div className="flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={user.Password}
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                      readOnly
                    />
                    <button
                      onClick={() => setShowPassword((prevState) => !prevState)}
                      className="ml-2 text-gray-600 hover:text-gray-800"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button
                      className="p-2 rounded-full bg-green-300 text-white hover:bg-blue-300 transition duration-150"
                      onClick={() => handleEditUser(user)}
                    >
                      <CiEdit size={20} />
                    </button>
                    <button
                      className="p-2 rounded-full bg-red-200 text-red-600 hover:bg-red-300 transition duration-150"
                      onClick={() => handleDeleteUser(user.ID)}
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <UserModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalType={modalType}
          user={selectedUser}
        />
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          confirmDelete={confirmDeleteUser}
        />
      </div>
    </div>
  );
};

export default UserTable;
