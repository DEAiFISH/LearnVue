// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// 第二步：创建路由器
const router = createRouter({
    history:createWebHistory(), // 路由器的工作模式
    routes:[ // 路由规则
        {
            path:'/home',
            component:Home
        },
        {
            path:'/new',
            component:News
        },
        {
            path:'/about',
            component:About
        }
    ]
})

export default router