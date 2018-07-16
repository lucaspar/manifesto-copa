import Vue from 'vue';
import VueRouter from 'vue-router';

import Manifesto from '@/components/Pages/Manifesto';

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Manifesto,
            meta: {
                requiresAuth: false,
                title: 'Manifesto Copa do Mundo'
            }
        },
    ]
});

router.beforeEach((to, from, next) => {

    document.title = to.meta.title; // set page title
    next();

});

export default router;