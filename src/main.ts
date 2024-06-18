import { createApp } from 'vue';
import './style.css';
import 'element-plus/theme-chalk/display.css'
import App from './App.vue';
import { createPinia } from 'pinia';
import { useAuthStore } from '@/stores/auth.ts';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router, {addRoute} from '@/router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
const authStore = useAuthStore(pinia);

if(authStore.isAuthenticated()){
  addRoute(authStore.user.permissions);
}
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
