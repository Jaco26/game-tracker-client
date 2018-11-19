import Vue from 'vue'
import { store } from '../store'
import Router from 'vue-router'

import Admin from '@/views/Admin/index'
import Login from '@/views/Login/index'
import Home from '@/views/Home/index'
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
      path: '/super-secret/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '*',
      component: PageNotFound,
    }
  ]
});


router.beforeEach((to, from, next) => {
  if (to.name === 'login' || to.name === 'admin') {
    next();
  } else if (store.state.user.gameId) {
    next();
  } else {
    next({
      name: 'login',
      replace: true,
    });
  }
  // next();
});

export default router;