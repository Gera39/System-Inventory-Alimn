import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import InventoryPage from '../pages/InventoryPage.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/JAJA',
        name: 'Home',
        component: () => import('../App.vue')
    },
    {
        path:'/jerry',
        name:'jerry',
        component: InventoryPage
    }
    /* {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    } */
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router