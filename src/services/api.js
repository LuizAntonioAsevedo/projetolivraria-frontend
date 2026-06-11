import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchBooks = () => {
  return api.get("/livros");
};

export const fetchBookById = (id) => {
  return api.get(`/livros/${id}`);
};

export const createOrder = (pedido) => {
  return api.post("/pedidos", pedido);
};

export default api;