import { createRouter, createWebHistory } from "vue-router";
import ProductsList from "./page/products/ProductsList.vue";
import Register from "./page/auth/Register.vue";
import Login from "./page/auth/Login.vue";
import OrdersList from "./page/orders/OrdersList.vue";
import Checkout from "./page/checkout/Checkout.vue";
import NotFound from "./page/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProductsList},
        {path: '/auth', component: null, children: [
            {path: 'register', component: Register},
            {path: 'login', component: Login}
        ]},
        {path: '/orders', component: OrdersList},
        {path: '/checkout', component: Checkout},
        {path: '/:notFound(.*)', component: NotFound},
    ]
});

export default router;