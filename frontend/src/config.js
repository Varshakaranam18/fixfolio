// Environment configuration
export const config = {
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:8080/api/notes",
  AUTH_URL: import.meta.env.VITE_AUTH_URL || "http://localhost:8080/api/auth",
}; 