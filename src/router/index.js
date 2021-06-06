import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/main'
import { postRoutes } from "@/pages/post/postRoutes";
import { loadPage } from "@/helpers/routerUtils";

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        name: 'Main',
        component: Layout,
        redirect: "/posts/list",
        children: [
            ...postRoutes,
        ],
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: loadPage("PageNotFound"),
    }
]

const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    linkActiveClass: "active",
    mode: 'history',
    routes: constantRouterMap
})

export default router
