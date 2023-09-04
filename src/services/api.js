import axios from "axios";

const API_URL = `http://localhost:8000`

export const uploadFile = async(data) => {
  try {
    const res = await axios.post(`${API_URL}/upload`, data);
    return res.data;
  } catch (error) {
    console.log('Error while calling api', error.message)
  }
}