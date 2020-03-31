import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '../config'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/',
    name: '想定编辑',
    redirect:'/index',

  },
  {
    path: '/index',
    name: '想定编辑',
    component: () => import('@/views/index'),
  } */
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/fade',
    name: 'Fade',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fade.vue')
  },
  // {
  //   path: '/zoom',
  //   name: 'Zoom',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Zoom.vue')
  // },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  // }
];
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
console.log(routes);
const router = new VueRouter({
  base: config.baseURL,
  routes
});

router.beforeEach((to,from,next) => {
  if( to.meta && to.meta.title){
    document.title = to.meta.title;
  }
  if( to.path === config.loginURL){
    return next();
  }
  next();
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
// export {
//   router
// }
