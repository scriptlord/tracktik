import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ClientListView from '@/views/ClientListView.vue';
import ClientDetailView from '@/views/ClientDetailView.vue';
import SiteDetailView from '@/views/SiteDetailView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ClientList',
    component: ClientListView,
  },
  {
    path: '/clients/:id',
    name: 'ClientDetail',
    component: ClientDetailView,
  },
  {
    path: '/sites/:id',
    name: 'SiteDetail',
    component: SiteDetailView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;