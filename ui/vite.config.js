import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { DOCKERIZED_ENV } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: DOCKERIZED_ENV ? "http://api:8080" : "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});