import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from '@mdx-js/rollup'

const { DOCKERIZED_ENV } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js"
    },
    extensions: ['.mdx', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
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