import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: null},
        {path: '/auth', component: null, children: [
            {path: 'register', component: null},
            {path: 'login', component: null}
        ]},
        {path: '/orders', component: null},
        {path: '/checkout', component: null},
        {path: '/:notFound(.*)', component: null},
    ]
});

export default router;