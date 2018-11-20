<template>
  <b-row class="justify-content-sm-center">
    <b-col class="text-center" cols="12">
      <h1>Admin</h1>
    </b-col>
    <b-col cols="12">
      <b-col cols="6" offset="3">
        <b-form @submit.prevent="onSubmit" @reset="onReset" autocomplete="off">
          <b-form-group
            label="Create a game"
            label-for="new-game"
          >
            <b-form-input
              id="new-game"
              v-model.trim="newGame"
              placeholder="Enter game name"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
    </b-col>
    <b-col cols="12">
      <b-col cols="8" offset="2">
        <b-list-group>
          <b-list-group-item
            v-for="game in games" 
            :key="game.id"
            class="d-flex w-100 justify-content-between pb-0"
          >
            <p>{{game.name}}</p>
            <small>Created: {{game.date_created}}</small>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-col>
  </b-row>
</template>

<script>
import { bindState } from '@/store';
export default {
  computed: {
    ...bindState('setup', [
      'newGame',
      'games',
    ]),
  },
  mounted() {
    this.$store.dispatch('setup/fetchGames')
  },
  methods: {
    onSubmit() {
      if (this.newGame) {
        this.$store.dispatch('setup/addGame');
      }
    },
    onReset() {
      this.newGame = '';
    },
  },
}
</script>
