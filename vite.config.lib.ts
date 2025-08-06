import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages'),
      '@suminhan/land-design': resolve(__dirname, './packages/index'),
    },
  },
  build: {
    // minify:'terser',
    // terserOptions:{
    //   compress:{
    //     drop_console:true,
    //     drop_debugger:true,
    //   }
    // },
    lib: {
      entry: resolve(__dirname, 'packages/index.tsx'),
      name: 'land-design',
      fileName: format => `index.${format}.js`,
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDom',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      root: '../',
      tsconfigPath: resolve(__dirname, './tsconfig.json'),
      compilerOptions: {
        rootDir: resolve(__dirname, '../'),
      },
      outDir: resolve(__dirname, './lib'),
      include: [
        resolve(__dirname, './packages'),
        resolve(__dirname, './packages/index.tsx'),
      ],
      exclude: ['**/node_modules'],
    }),
  ],
});
