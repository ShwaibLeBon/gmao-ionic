import { createRouter, createWebHistory } from '@ionic/vue-router';
import AppRouterContent from '@/components/app/tabs_content.vue'
import Home from '@/pages/Home.vue';
import Equipements from '@/pages/Equipements.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: AppRouterContent,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: '/equipements',
        component: Equipements,
      },
      // {
      //   path: 'library',
      //   component: () => import('./views/LibraryPage.vue'),
      // },
      // {
      //   path: 'search',
      //   component: () => import('./views/SearchPage.vue'),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
