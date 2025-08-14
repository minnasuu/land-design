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
      name: 'LandDesign',
      fileName: format => `index.${format}.js`,
    },
    outDir: 'lib',
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        'react/jsx-dev-runtime'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'react/jsx-dev-runtime': 'jsxDevRuntime',
        },
        // 添加更安全的UMD包装器
        extend: true,
        // 确保在React加载后再初始化库
        intro: `
          if (typeof React === 'undefined') {
            throw new Error('React must be loaded before LandDesign');
          }
          if (typeof ReactDOM === 'undefined') {
            throw new Error('ReactDOM must be loaded before LandDesign');
          }
        `,
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
        resolve(__dirname, './pro-packages'),
      ],
      exclude: ['**/node_modules'],
    }),
  ],
});
