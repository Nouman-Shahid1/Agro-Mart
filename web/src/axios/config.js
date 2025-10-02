import axios from "axios";
import { addAccessToken, handleRequestError, handleResponseOK, handleResponseError } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8080', // Use Vercel API routes in production
});

axiosInstance.interceptors.request.use(addAccessToken, handleRequestError);
axiosInstance.interceptors.response.use(handleResponseOK, handleResponseError);

export default axiosInstance;
