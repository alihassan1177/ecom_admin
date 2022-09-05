import axios from "axios";

const BASE_API_URL = "http://localhost:8000/api";

export const api = axios.create({
  baseURL: BASE_API_URL,
});
