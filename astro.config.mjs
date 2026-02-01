// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: netlify(),
  output: "static",
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    headers: {
      "content-security-policy": "require-trusted-types-for 'script';",
      "x-frame-options": "SAMEORIGIN",
      "Cross-Origin-Opener-Policy": "unsafe-none",
      "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    }
  }
});
