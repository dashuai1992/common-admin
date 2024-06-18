import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({resolvers: [ElementPlusResolver()]}),
    Components({resolvers: [ElementPlusResolver()]}),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
    open: false,
    proxy: {
      '/dev/api': {
        target: 'http://127.0.0.1:4000',
        rewrite: path => {
          let res = path.replace(/^(\/dev\/api\/)(.*)/, '/static/$2.json');
          return res;
        }
      }
    },
    fs: {
      strict: false
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/index.scss";`
      }
    }
  },

})
