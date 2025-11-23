// src/Sevice/api.js
import axios from "axios";

const API_URL = "http://localhost:3001/users";

// POST: tạo user mới
const createUser = (email, userName, password) => {
    return axios.post(API_URL, {
        email,
        userName,
        password,
    });
};

const getListUsers = () => {
    // json-server: http://localhost:3001/users
    return axios.get(API_URL);
};

// export default 1 object, sau này import api from '.../api'
const api = { createUser, getListUsers };
export default api;
