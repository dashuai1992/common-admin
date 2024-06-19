import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import {resolve} from "path"

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_APP_BASE_CONTEXT,
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
  build: {
    rollupOptions: {
      output: {
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : '';
          // substr 是被淘汰語法，因此要改 slice
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          );
        },
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
    open: false,
    proxy: {
      '/common-admin/api': {
        target: 'http://127.0.0.1:4000',
        rewrite: path => {
          console.log(path);
          let res = path.replace(/^(\/common-admin\/api\/)(.*)/, '/static/$2.json');
          console.log(res);
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
