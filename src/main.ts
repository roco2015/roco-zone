import { createApp } from 'vue';
import App from './App.vue';
import $http from '@/plugins/ajax';
import router from '@/router/index';
import './assets/css/main.css';

const app = createApp(App);

app.use($http);
app.use(router);

app.mount('#app');
