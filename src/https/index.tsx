import React from "react";
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { viteConfig } from "../viteconfig";

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const getAccessToken = () => localStorage.getItem("access_token");
const getRefreshToken = () => localStorage.getItem("refresh_token");
const setAccessToken = (token: string) =>
  localStorage.setItem("access_token", token);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: viteConfig.APP_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control":
      "no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate",
    Accept: "application/json",
    Pragma: "no-cache",
    "X-Content-Type-Options": "nosniff",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "X-Frame-Options": "SAMEORIGIN",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJMb2tlc2gyMiIsInJvbGUiOiJudXJzZSIsImV4cCI6MTc1MTAwMTMyN30.whbxXEOaOZm34S_pnP11l8mjFu6oKnItBhFdjtny-FI";
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        // Handle logout or redirect to login
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/refresh`,
          { refresh_token: refreshToken }
        );
        setAccessToken(data.access_token);
        axiosInstance.defaults.headers.common["Authorization"] =
          "Bearer " + data.access_token;
        processQueue(null, data.access_token);
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        // Handle logout or redirect to login
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
