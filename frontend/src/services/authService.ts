import axios from "axios";

const API = "http://localhost:5000/api/auth"; // change based on backend

export const loginUser = async (phone: string, password: string) => {
  return axios.post(`${API}/login`, {
    phone,
    password,
  });
};

export const registerUser = async (name: string, phone: string, password: string) => {
  return axios.post(`${API}/register`, {
    name,
    phone,
    password,
  });
};
