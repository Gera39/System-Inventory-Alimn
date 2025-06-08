import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'flowbite';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia()).mount('#app')
