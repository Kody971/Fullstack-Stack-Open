import axios from "axios";
const baseUrl = "/api/persons";

const getAlltData = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createData = (newData) => {
  return axios.post(baseUrl, newData).then((response) => response.data);
};

const deleteData = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const updateData = (id, newData) => {
  return axios
    .put(`${baseUrl}/${id}`, newData)
    .then((response) => response.data);
};

export default { getAlltData, createData, deleteData, updateData };
