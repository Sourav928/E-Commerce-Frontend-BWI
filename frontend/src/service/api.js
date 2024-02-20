import axios from "axios";

const API_URL = "https://dummyjson.com/auth";

export const loginAPI = async (data) => {
  try {
    return await axios.post(`${API_URL}/login`, data);
  } catch (error) {
    console.log("Error while login.", error);
  }
};
