import axios from "axios";
const API = "http://localhost:5000/api/auth"; // change based on backend
export const loginUser = async (phone, password) => {
    return axios.post(`${API}/login`, {
        phone,
        password,
    });
};
export const registerUser = async (name, phone, password) => {
    return axios.post(`${API}/register`, {
        name,
        phone,
        password,
    });
};
