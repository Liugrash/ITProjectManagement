import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:()=>import("../pages/main.vue")
    },
    {
        path:"/in",
        component:()=>import("../pages/putin.vue")
    },
    {
        path:"/login",
        component:()=>import("../pages/login.vue")
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
  })

export default router