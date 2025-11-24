import axios from "axios";
import { Category } from "../types/category";

const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL;

export const categoryService = {
  async getAll() {
    const res = await axios.get(API_BASE_URL);
    return res.data;
  },

  async create(category: Category) {
    const res = await axios.post(API_BASE_URL, category);
    return res.data;
  },

  async update(id: string, category: Category) {
    const res = await axios.put(`${API_BASE_URL}/${id}`, category);
    return res.data;
  },

  async remove(id: string) {
    const res = await axios.delete(`${API_BASE_URL}/${id}`);
    return res.data;
  },
};
