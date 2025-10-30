// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import Detail from "@/pages/Detail.vue";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import { createRouter, createWebHistory } from "vue-router";

// 第二步：创建路由器
const router = createRouter({
    history:createWebHistory(), // 路由器的工作模式
    routes:[ // 路由规则
        {
            name:'zhuye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/new',
            component:News,
            children:[
                // 嵌套路由
                {
                    name:'neirong',
                    path:'detail/:id/:title/:content?', // 注意：这里不要加斜杠
                    component:Detail
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        }
    ]
})

export default router