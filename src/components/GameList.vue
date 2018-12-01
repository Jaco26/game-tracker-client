<template>
  <div>
    <b-row v-for="game in games" :key="game.id" class="my-3">
      <b-col>
        <b-card :no-body="show !== game.id">
          <b-row slot="header">
            <b-col class="d-flex justify-content-between align-items-center">
              <h3>{{game.name}}</h3>
              <div>
                <b-button variant="info" size="sm" @click="toggleDetails(game.id)">Details</b-button>
                <b-button-close class="ml-3 delete" @click="deleteGame(game.id)"></b-button-close>
              </div>
            </b-col>
          </b-row>
          <b-row v-if="game.id === show">
            <b-col>
              <h4>Players:</h4>
              <ul>
                <li v-for="p in game.game_players" :key="p.player.name">
                  {{p.player.name}}
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { bindState } from '@/store';
export default {
  data() {
    return {
      show: null,
    }
  },
  computed: {
    ...bindState('setup', [
      'games',
    ]),
  },
  methods: {
    toggleDetails(gameId) {
      this.show === gameId ? this.show = null : this.show = gameId;
    },
    deleteGame(gameId) {
      const confirm = window.confirm('Are you sure? All game data will be lost!');
      if (confirm) {
        this.$store.dispatch('setup/deleteGame', gameId);
      }
    },
  },
};
</script>

<style scoped>
.item:hover {
  color: black;
  background-color: #efefef;
}
</style>

