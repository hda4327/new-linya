import VueRouter from 'vue-router'
import Vue from 'vue'
import store from '../store'

const Home = () => import('../views/home/Home')
const Team = () => import('../views/team/Team')
const TeamDetail = () => import('../views/teamDetail/TeamDetail')
const Coupe = () => import('../views/coupe/Coupe')
const CoupeDetail = () => import('../views/coupeDetail/CoupeDetail')
const Case = () => import('../views/case/Case')
const CaseDetail = () => import('../views/caseDetail/CaseDetail')
const About = () => import('../views/about/About')
const Project = () => import('../views/project/Project')
const ProjectDetail = () => import('../views/projectDetail/ProjectDetail')
const Picture = () => import('../views/projectDetail/ChildCom/Picture')
const Video = () => import('../views/video/Video')
const VideoDetail = () => import('../views/videoDetail/VideoDetail')
const Product = () => import('../views/projectDetail/ChildCom/Product')


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
    path:'/coupeDetail/:id',
    component: CoupeDetail,
  },
  {
    path:'/video',
    component: Video,

  },
  {
    path:'/videoDetail/:id',
    component: VideoDetail,
  },
  {
    path:'/case',
    component: Case,
    meta:{
      showTopTab:true
    }
  },
    {
    path:'/caseDetail',
    component: CaseDetail,
  },

   {
    path:'/about',
    component: About,
  },
  {
    path:'/project',
    component: Project
  },
{
    path:'/projectDetail',
    component: ProjectDetail,
    redirect:'/ProjectDetail/picture',
    children: [

      { path: 'picture', component: Picture },
      { path: 'product', component: Product },
      { path: 'video', component: Video },
      { path: '', component: Picture },

    ]
  },


]



const router = new VueRouter({
  routes,
  mode: 'history'
})




//全局路由前置守卫
router.beforeEach((to, from, next) => {
  // 进入非登录页
  if (to.path !='/login'){
    const sid = to.query.sid || localStorage.getItem('sid');
    if (sid){
      localStorage.setItem('sid', sid);
      store.commit('setSid', sid);

      // 在得到企业数据之后进行路由跳转，保证页面中获取到企业数据
      store.dispatch('reqCompanyMsg').then(res=>{
        next()
      })

    }
    else {
      next({ path : '/login'})
      return
    }
  }
  else{
    next()
  }

})

export default router;