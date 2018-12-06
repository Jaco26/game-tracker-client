import Vue from 'vue'
// import { store } from '../store'
import Router from 'vue-router'

import Admin from '@/views/Admin/index'
import Setup from '@/views/Setup/index'
import Home from '@/views/Home/index'
import AddGamePlayers from '@/views/AddGamePlayers/index'
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
      path: '/setup',
      name: 'setup',
      component: Setup,
    },
    {
      path: '/add-game-players/:gameId',
      name: 'addGamePlayers',
      component: AddGamePlayers,
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


export default router;
