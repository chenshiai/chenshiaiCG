import { createApp } from 'vue';
import App from './App.vue';
import route from './router';
import store from './store';
import BlockArea from './components/BlockArea.vue';
import './assets/css/marked.css';

createApp(App).use(store).use(route).component('BlockArea', BlockArea).mount('#app');
