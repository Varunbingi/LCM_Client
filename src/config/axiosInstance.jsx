import axios from "axios";
const BASE_URL="https://lms-server-m3gr.onrender.com/api/v1";
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, 
});

export default axiosInstance;
