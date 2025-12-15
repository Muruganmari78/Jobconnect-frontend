// src/utils/auth.js

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const login = () => {
  localStorage.setItem("token", "jobconnect-token");
};

export const logout = () => {
  localStorage.removeItem("token");
};
