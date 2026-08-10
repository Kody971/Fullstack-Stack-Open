import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";

const getAllData = () => {
  return axios.get(`${baseUrl}/api/all`).then((response) => response.data);
};

const getFindCountries = (countries) => {
  return axios.get(
    `${baseUrl}/api/name/{countries}`.then((response) => response.data),
  );
};

export default { getAllData, getFindCountries };
