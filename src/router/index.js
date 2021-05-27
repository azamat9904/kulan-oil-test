import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/main'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        name: 'Main',
        children: [{
            path: '/',
            component: () => import('../pages/post/index'),
            name: 'posts',
            meta: {title: 'Post', icon: 'main', affix: true}
        },
            {
                path: '/form',
                component: () => import('../pages/post/form'),
                name: 'form',
                meta: {title: 'Form', icon: 'main', affix: true}
            }
        ]
    }
]

const router = new Router({
    scrollBehavior: () => ({y: 0}),
    linkExactActiveClass: "active",
    routes: constantRouterMap
})

export default router
