// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: 'https://8raymond.github.io/raymondyap/'{
    plugins: [tailwindcss()],
  },
});
