import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      alert(error.response.data.message || "Ocorreu um erro. Verifique as informações e tente novamente.");
    } else {
      alert("Erro de conexão com o servidor.");
    }
    return Promise.reject(error);
  }
);

export default api;