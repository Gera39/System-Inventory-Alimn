import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'flowbite';
import { createPinia } from 'pinia';
import router from './router/main';
const app = createApp(App);
app.use(createPinia()).use(router).mount('#app')
