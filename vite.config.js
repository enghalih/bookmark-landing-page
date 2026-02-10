import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: ["/bookmark-landing-page/"],
  build: {
    outDir: "dist", // Ini memastikan hasil build masuk ke folder 'dist'
  },
});
