import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './view/home/index.vue';

const route = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', component: Home }],
});

export default route;
