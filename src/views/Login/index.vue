<template>
  <b-row class="justify-content-sm-center">
    <b-col class="text-center" cols="12" >
      <h1>Login</h1>
    </b-col>
    <b-col cols="12">
      <b-col cols="12" sm="10" offset-sm="1">
        <app-player-list></app-player-list>
      </b-col>
    </b-col>
    <b-col cols="12">
      <b-col cols="12" sm="10" offset-sm="1">
        <app-game-list></app-game-list>
      </b-col>
    </b-col>
  </b-row>
</template>

<script>
import appPlayerList from '@/components/PlayerList'
import appGameList from '@/components/GameList';
export default {
  components: {
    appPlayerList,
    appGameList,
  }
}
</script>
