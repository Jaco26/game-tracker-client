<template>
  <b-container class="align-items-center px-0" fluid id="app">
    <app-navbar></app-navbar>
    <transition name="route-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import { bindState } from '@/store';
// components
import appNavbar from '@/components/Navbar'
export default {
  components: {
    appNavbar,
  }
} 
</script>


<style lang="scss">

html, body {
  height: 100%;
}

#app {
  background-color: beige;
  min-height: 100%;
}

.route-fade-enter-active, .route-fade-leave-active {
  transition: opacity .1s;
}

.route-fade-enter, .route-fade-leave-to {
  opacity: 0;
}

</style>
