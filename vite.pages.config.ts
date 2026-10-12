import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  root: "pages",
  base: "/katende-pork-joint-website/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(process.cwd(), "src") } },
  publicDir: path.resolve(process.cwd(), "public"),
  build: { outDir: path.resolve(process.cwd(), "dist-pages"), emptyOutDir: true },
});
