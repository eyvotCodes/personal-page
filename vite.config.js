import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"


export default defineConfig({
  build: {
    target: "es2015"
  },
  plugins: [
    pugPlugin()
  ]
});
