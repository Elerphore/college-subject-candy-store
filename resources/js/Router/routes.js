const routes = [
    {
        path: '',
        component: () => import('../Pages/Store.vue'),
        name: 'store'
    },
  {
    path: 'home',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
  {
    path: 'about',
    component: () => import('../Pages/About.vue'),
    name: 'about'
  },
]

export default routes;
