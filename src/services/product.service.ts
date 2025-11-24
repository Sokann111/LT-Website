import axios from "axios";
import { Product } from "../types/product";

const API_BASE_URL = "http://localhost:5000/api/products";

export const productService = {
  async getAll() {
    const res = await axios.get(API_BASE_URL);
    return res.data;
  },

  async create(product: Product) {
    const res = await axios.post(API_BASE_URL, product);
    return res.data;
  },

  async update(id: string, product: Product) {
    const res = await axios.put(`${API_BASE_URL}/${id}`, product);
    return res.data;
  },

  async remove(id: string) {
    const res = await axios.delete(`${API_BASE_URL}/${id}`);
    return res.data;
  },
};
