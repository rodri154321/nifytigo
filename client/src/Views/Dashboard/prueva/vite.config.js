// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import styleImport from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    react(),
    // styleImport(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: "import { jsx } from '@emotion/react'",
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/black-dashboard-react.scss";`, // Personaliza según tus necesidades
      },
    },
  },
});
