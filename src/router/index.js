import VueRouter from 'vue-router'
import Vue from 'vue'
import store from '../store'

const Home = () => import('../views/home/Home')
const Team = () => import('../views/team/Team')
const TeamDetail = () => import('../views/teamDetail/TeamDetail')
const Coupe = () => import('../views/coupe/Coupe')
const Case = () => import('../views/case/Case')
const About = () => import('../views/about/About')


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


let routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home,
    meta:{
      showTopTab:true
    }
  },
  {
    path:'/teamDetail/:tit',
    component: TeamDetail,

  },
  {
    path:'/team',
    component: Team,
    meta:{
      showTopTab:true
    }
  },

  {
    path:'/coupe',
    component: Coupe,
    meta:{
      showTopTab:true
    }
  },
  {
    path:'/case',
    component: Case,
    meta:{
      showTopTab:true
    }
  },
   {
    path:'/about',
    component: About,
  },


]



const router = new VueRouter({
  routes,
  mode: 'history'
})




router.beforeEach((to, from, next) => {
  if (to.path !='/login'){
    const sid = to.query.sid || localStorage.getItem('sid');
    if (sid){
      localStorage.setItem('sid', sid)
      store.commit('setSid', sid)
      store.commit('getCompanyMsg')
    }
    else {
      next({ path : '/login'})
      return
    }
  }
  next()
})

export default router;