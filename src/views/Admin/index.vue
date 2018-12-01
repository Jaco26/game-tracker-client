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
      <b-col cols="12" sm="10" offset-sm="1">
        <app-game-table></app-game-table>
      </b-col>
    </b-col>
  </b-row>
</template>

<script>
import { bindState } from '@/store';
import appGameTable from './GameTable';
export default {
  components: {
    appGameTable
  },
  computed: {
    ...bindState('setup', [
      'newGame',
    ]),
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
