import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solidStart({ devOverlay: false }),
    tailwindcss(),
    nitro({
      // Every page is static content, so the whole site is prerendered into .output/public.
      // That folder is what gets deployed to Netlify; the Node server in .output/server is unused there.
      prerender: {
        crawlLinks: true,
        routes: ["/", "/404"],
        failOnError: true,
      },
    }),
  ],
});
