import { defineConfig } from "vite"
import { resolve } from 'path'
import pugPlugin from "vite-plugin-pug"


export default defineConfig({
  build: {
    target: "es2015",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, '404.html'),
      },
    },
  },
  plugins: [
    pugPlugin(),
  ],
});
