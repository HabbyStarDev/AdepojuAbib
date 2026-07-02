import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Explicitly configure for React 19
      jsxRuntime: "automatic",
      babel: {
        plugins: [],
      },
    }),
  ],
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
