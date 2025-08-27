import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/pages/Home.vue';
import Equipements from '@/pages/Equipements.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/equipements', component: Equipements },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
