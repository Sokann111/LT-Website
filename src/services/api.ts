import axios from "axios";

const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401 && error.response.data.message === "jwt expired") {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const response = await axios.post(
            `${API_BASE_URL}/auth/refresh-token`,
            { refreshToken }
          );
          sessionStorage.setItem("accessToken", response.data.newAccessToken);
          error.config.headers["Authorization"] = `Bearer ${response.data.newAccessToken}`; 
          return axios(error.config); 
        } catch (refreshError) {
          console.error("Refresh token error:", refreshError);
        }
      }
    }

    return Promise.reject(error); 
  }
);
export { axiosInstance };
