import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solidStart({ devOverlay: false }),
    tailwindcss(),
    nitro({
      // Pinned on purpose: on Netlify's build machines Nitro would otherwise auto-detect the host and
      // switch to its "netlify" preset, which writes to dist/ and a serverless function instead of .output/public.
      preset: "node-server",
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
