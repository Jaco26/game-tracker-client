<template>
  <b-container class="align-items-center" fluid id="app">
    <transition name="route-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import { bindState } from '@/store';
export default {

} 
</script>


<style lang="scss">

html, body {
  margin: 0;
  height: 100%;
}

#app {
  background-color: beige;
  height: 100%;
}


.route-fade-enter-active, .route-fade-leave-active {
  transition: opacity .1s;
}

.route-fade-enter, .route-fade-leave-to {
  opacity: 0;
}

</style>
