const axios = require("axios");

const myWalletAPI = axios.create({
  baseURL: "http://192.168.1.10:3000", // Adresse IP du PC qui host le backend
  timeout: 1000,
});

export default myWalletAPI;
