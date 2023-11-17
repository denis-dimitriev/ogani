import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgx from "@svgx/vite-plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), svgx(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
