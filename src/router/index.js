import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Search from '../views/Search.vue'
import SicknessDetail from '../views/SicknessDetail'
import PersonalMain from '../views/personInfo/PersonalMain'
import UserInfo from'../views/personInfo/UserInfo'
import Test from '../views/Test'
import Chat from '../views/chat/Index'
import MessageBOX from '../views/chat/messageBox/Index';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      check:false
    }
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta:{
      check:false
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta:{
      check:false
    }
  },
  {
    path: '/detail',
    name: 'SicknessDetail',
    component: SicknessDetail,
    meta:{
      check:false
    }
  },
  {
    path:'/chat',
    name:'Chat',
    component:Chat,
    children:[
      {
        path:'message',
        name:'Message',
        component:MessageBOX
      }
    ]
  },
  {
    path: '/personalMain',
    name: 'PersonalMain',
    component: PersonalMain,
    meta:{
      check:true
    },
    children: [
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: UserInfo,
        meta:{
          check:true
        }
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta:{
      check:false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(!to.meta.check){
    next()
  }else{
    let token = localStorage.getItem('accessToken')
    if(token){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
