import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Oversea from "../views/Oversea.vue";
import BbcNews from "../views/BbcNews.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/home",
    name: "landing",
    component: Home,
},
{
    path: "/oversea",
    name: "oversea",
    component: Oversea,
},
{
    path: "/bbc",
    name: "BBC News",
    component: BbcNews,
},
    //   {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
];

const router = new VueRouter({
    mode: process.env.IS_ELECTRON ? "hash" : "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

export default router;