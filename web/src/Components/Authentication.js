"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { setToken } from "../reducers/Auth/authSlice";

const Authentication = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { token, role } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);

  const publicRoutes = ["/login", "/signup", "/forgot-password"]; // Routes that don't require authentication
  const roleBasedRoutes = {
    admin: ["/admin"],
    seller: ["/seller-profile"],
    buyer: ["/buyer"],
  };

  /**
   * Load token and role from localStorage during initial render
   */
  useEffect(() => {
    const savedToken = localStorage.getItem("access_token");
    const savedRole = localStorage.getItem("user_role");

    if (savedToken) {
      dispatch(setToken(savedToken)); // Restore token to Redux
    } else if (!publicRoutes.includes(pathname)) {
      // Redirect to login only if the current route is not public
      router.push("/login");
    }

    setLoading(false); // Stop loading after initial check
  }, [dispatch, router, pathname]);

  /**
   * Redirect users to the appropriate page based on their role and current route
   */
  useEffect(() => {
    if (!token && !publicRoutes.includes(pathname)) {
      router.push("/login");
      return;
    }

    if (token && role) {
      const normalizedRole = role.toLowerCase();
      const allowedRoutes = roleBasedRoutes[normalizedRole] || [];
      const isProtectedRoute = Object.values(roleBasedRoutes).flat().includes(pathname);

      if (isProtectedRoute && !allowedRoutes.includes(pathname)) {
        router.push(allowedRoutes[0] || "/login");
      }
    }
  }, [token, role, pathname, router]);

  /**
   * Show loading screen during initial authentication
   */
  if (loading) {
    return (
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1296882154/vector/green-abstract-layers-background.jpg?s=612x612&w=0&k=20&c=GdVbshVWQXddCpjLdjMTpHvDK2s1C4p7BfhGtpqObEY=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center text-center p-8 rounded-lg">
          <div className="relative flex items-center justify-center h-32 w-32 mb-6">
            <div className="absolute h-full w-full rounded-full border-8 border-green-400 border-t-transparent animate-spin-slow"></div>
            <h1 className="text-3xl font-extrabold text-green-200">
              Authenticating AgroMart...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Render children for public routes and authenticated users
   */
  return <>{children}</>;
};

export default Authentication;
