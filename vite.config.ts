import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vike({ prerender: true }), react(), tailwindcss()],
  server: { allowedHosts: true },
});
