import axios from "axios";

const api = axios.create({
  baseURL: "https://demo-ecom-with-backend.vercel.app/api",
});

export default api;
