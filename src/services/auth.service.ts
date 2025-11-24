import { axiosInstance } from "./api"; 

const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL;
export const authService = {
  async register(username: string, password: string) {
    try {
      const res = await axiosInstance.post(`${API_BASE_URL}/auth/register`, {
        username,
        password,
      });
      return res.data; 
    } catch (error: unknown) {
      
      if (error instanceof Error) {
        throw new Error(error.message); 
      }
      throw new Error("Registration failed");
    }
  },

  async login(username: string, password: string) {
    try {
      const res = await axiosInstance.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });
      return res.data; 
    } catch ( error: unknown) {
        if (error instanceof Error) {
        throw new Error(error.message); 
      }
      throw new Error( "Login failed");
    }
  },

  // You could also implement token refresh if you want a refresh mechanism.
  async refreshToken() {
    try {
      const res = await axiosInstance.post(`${API_BASE_URL}/auth/refresh-token`);
      return res.data;
    } catch (error) {
      throw new Error("Token refresh failed");
    }
  },
};
