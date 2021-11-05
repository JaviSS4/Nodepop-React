import axios from "axios";

const client = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  // No entiendo el porqué pero no me funciona si importo la url del archivo .env, he tenido que ponerla directamente
  baseURL: "http://localhost:3001",
});

export default client;
