import axios from "axios";
const baseUrl = "http://localhost:3001/list";

const getAlltData = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createData = (newData) => {
  return axios.post(baseUrl, newData).then((response) => response.data);
};

export default { getAlltData, createData };
