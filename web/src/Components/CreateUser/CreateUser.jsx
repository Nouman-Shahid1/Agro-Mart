"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../reducers/Auth/authSlice";

const UserModal = ({ showModal, setShowModal, user }) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState(user?.role || "Buyer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Set initial role when modal is opened for updating user
    if (user) {
      setRole(user.role || "Buyer");
    }
  }, [user]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setError(""); // Clear error when role changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Dispatch update user action with only role information
      await dispatch(
        updateUser({ userId: user.ID, userData: { role } })
      ).unwrap();
      setShowModal(false);
    } catch (err) {
      console.error("Error updating user role:", err);
      setError("Failed to update role. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showModal ? "opacity-100 visible" : "opacity-0 invisible"
      } z-50`}
      aria-live="assertive"
    >
      <form
        onSubmit={handleSubmit}
        className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in"
        aria-label="Update User Role Form"
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={() => setShowModal(false)}
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-center">Update User Role</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Role</label>
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className={`px-6 py-3 text-lg font-bold text-white rounded-lg ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } focus:ring-4 focus:ring-green-500 transition-all`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Update Role"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
