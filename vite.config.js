import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import eslint from "vite-plugin-eslint2";

import { defineConfig, loadEnv } from "vite";

export default ({mode}) => {
  
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return defineConfig({
    root: "src",
    base: "/mb-chat-bot",
    build: {
    lib: false,
    rollupOptions: {
      input: {
        main: 'src/embed-chat-bot.tsx', // <-- your new entry
      },
      output: {
        entryFileNames: 'bot-widget.js',
        format: 'umd',
        name: 'BotWidget',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      external: ['react', 'react-dom'],
    },
    },
    assetsInclude: ["**/*.svg", "**/*.png", "**/*.wav"],
    plugins: [
      svgr({
        svgrOptions: {
          ref: true,
        },
      }),
      react({
        include: "**/*.{jsx,tsx}",
      }),
      eslint()
    ],
    server: {
      port: 3000,
      host: true,
    },
  });
}
