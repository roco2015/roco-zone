import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/css/main.css';
import ajax from './plugins/ajax';

const app = createApp(App);
app.use(router);
app.use(ajax);

app.mount('#app');
