import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Member/Login/Login.vue'
import FindPwd from '../views/Member/Login/FindPwd.vue'
import ChgPwd from '../views/Member/Login/ChgPwd.vue'
import SignUpAgree from '../views/Member/Login/SignUpAgree.vue'
import SignUp from '../views/Member/Login/SignUp.vue'
import Info from '../views/Member/Account/Info.vue'
import Profile from '../views/Member/Account/Profile.vue'
import Upload from '../views/Upload.vue'
import Notice from '../views/Admin/Notice/Notice.vue'
import NoticeDetail from '../views/Admin/Notice/NoticeDetail.vue'
import NoticeWrite from '../views/Admin/Notice/NoticeWrite.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Login/login',
    name: 'login',
    component: Login
  },
  {
    path: '/Login/findPwd',
    name: 'findPwd',
    component: FindPwd
  },
  {
    path: '/Login/ChgPwd',
    name: 'ChgPwd',
    component: ChgPwd
  },
  {
    path: '/Login/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Login/SignUpAgree',
    name: 'SignUpAgree',
    component: SignUpAgree
  },
  {
    path: '/Account/Info',
    name: 'Info',
    component: Info
  },
  {
    path: '/Account/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/Notice/NoticeList',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/Notice/NoticeDetail/:NoticeId',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/Notice/NoticeWrite/:NoticeId?',
    name: 'NoticeWrite',
    component: NoticeWrite
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
