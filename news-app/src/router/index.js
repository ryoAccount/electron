import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Oversea from "../views/Oversea.vue";
import BbcNews from "../views/BbcNews.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Japan News",
    component: Home,
},
{
    path: "/home",
    name: "Home",
    component: Home,
},
{
    path: "/oversea",
    name: "Oversea News",
    component: Oversea,
},
{
    path: "/bbc",
    name: "BBC News",
    component: BbcNews,
}];

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