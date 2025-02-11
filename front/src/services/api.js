import axios from "axios";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Change this to your actual backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
