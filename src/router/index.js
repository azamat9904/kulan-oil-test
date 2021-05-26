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
            name: 'Posts',
            meta: { title: 'Post', icon: 'main', affix: true }
        },
            {
                path: '/form',
                component: () => import('../pages/post/form'),
                name: 'Form Post',
                meta: { title: 'Post Create', icon: 'main', affix: true }
            }
        ]
    }
]

const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})


export default router
