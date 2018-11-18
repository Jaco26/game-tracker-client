import Vue from 'vue'
import { store } from '../store'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import PageNotFound from '@/views/PageNotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      component: PageNotFound,
    }
  ]
});


// router.beforeEach((to, from, next) => {
//   // console.log(to, from);
//   if (to.name === 'login') {
//     next();
//   } else if (store.state.player.joinedGame) {
//     next();
//   } else {
//     next({
//       name: 'login',
//       replace: true,
//     });
//   }
//   next();
// });

export default router;