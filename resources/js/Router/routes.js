const routes = [
    {
        path: '',
        component: () => import('../Pages/Store.vue'),
        name: 'store'
    },
    {
        path: '/bin',
        component: () => import('../Pages/Bin.vue'),
        name: 'bin'
    },
    {
        path: '/admin',
        component: () => import('../Pages/AdminPanel.vue'),
        name: 'adminPanel'
    },
    {
        path: '/account',
        component: () => import('../Pages/Account.vue'),
        name: 'account'
    }
]

export default routes;
