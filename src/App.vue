<template>
  <b-container class="align-items-center px-0" fluid id="app">
    <app-navbar></app-navbar>
    <b-row class="justify-content-center">
      <b-col cols="sm-11">
        <transition name="route-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </b-col>
    </b-row>
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
  },
  computed: {
    ...bindState('setup', [
      'games',
      'roles',
      'players',
    ]),
    ...bindState('user', [
      'playerId',
    ]),
  },
  methods: {
    shouldFetch(key) {
      return this[key].length === 0;
    }
  },
  mounted() {
    if (this.shouldFetch('games')) this.$store.dispatch('setup/fetchGames');
    if (this.shouldFetch('roles')) this.$store.dispatch('setup/fetchRoles');
    if (this.shouldFetch('players')) this.$store.dispatch('setup/fetchPlayers');
    if (this.playerId) this.$store.dispatch('setup/fetchPlayer', this.playerId);
  },
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

.delete:hover {
  color: red !important;
}

</style>
