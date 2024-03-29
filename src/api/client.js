import axios from "axios";

const client = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  // No entiendo el porqué pero no me funciona si importo la url del archivo .env, he tenido que ponerla directamente
  baseURL: "http://localhost:3001",
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response,
      ...error.response.data,
    });
  }
);

export const setAuthorizationHeader = (token) => {
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

export default client;
