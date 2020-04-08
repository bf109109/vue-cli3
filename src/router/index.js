import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)
import Films from '@/views/Films'
// import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import Error from "@/views/Error"
import Detail from "@/views/Detail"
import Nowplaying from "@/views/films/Nowplaying"
import Comingsoon from "@/views/films/Comingsoon"
const routes = [
  {
    path:'/films',
    component:Films,
    children:[{
      path:'/films/nowplaying',
      component:Nowplaying

    },{
      path:'/films/comingsoon',
      component:Comingsoon
    },
  {
    path:'',
    redirect:'/films/nowplaying'
  }],
    
  },
  {
    path:'/city',
    component:()=>import('@/views/City')
  },
  // {
  //   path:'/cinema',
  //   component:Cinema
  // },
  {
    path:'/cinema',
    // component:()=>import(/* webpackChunkName:'cinema'*/'@/views/Cinema')
    component:resolve =>{
      require(['@/views/Cinema'],resolve)
    }
  },
  {
    path:"/cinema/search",
    component:()=>import("@/views/Search")
  },
  {
    path:"/login",
    component:()=>import("@/views/Login")
  },
  {
    path:'/center',
    component:Center,
    // beforeEnter: (to, from, next) => {
    //   console.log('jin ru center...')
    // }
    beforeEnter(to,from,next){
      console.log('center.....')
      next()
    }
  },
  {
    name:'detail',
    props:true,
    path:'/detail/:id',
    component:Detail
  },
  {
    path:'/',
    redirect:'/films'
  },
  {
    path:'*',
    component:Error
  }
]



const router = new VueRouter({
  routes,
  mode:'history'
})

// router.beforeEach((to,from,next)=>{
//   if(from.path=='/cinema'){
//     console.log('cong cinema lai ')
//   }
//   next()
// })
// router.afterEach((to,from)=>{
// if(to.path=='/center'){
//   console.log('jinru center')
// }
// })

router.beforeEach((to,from,next)=>{
  if(to.path === "/center"){
    if(localStorage.getItem("token")){//说明用户已经登录了
      next()
    }else{
      next("/login") //如果用户没有登录直接跳转到登录界面进行用户登录
    }
  }else{
    next()
  }
})
export default router
