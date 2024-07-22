import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './assets/tailwind.css';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.config.devtools = false
app.mount('#app');
