import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  

  // Smart base for multiple platforms
  base: process.env.NODE_ENV === 'production' 
    ? (process.env.VITE_BASE_PATH || '/') 
    : '/',  
    server: {
    port: 5500,        // ← Change to 5500
    strictPort: true,  // Optional: Don't try another port if 5500 is busy
    open: true,         // Optional: Auto open browser
    hmr: {
    port: 5500
    } 
    },
  // Ensure proper React handling
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
  // Define React as external to prevent bundling issues
  define: {
    global: "globalThis",
  },
});
