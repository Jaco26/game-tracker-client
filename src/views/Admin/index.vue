<template>
  <b-row class="justify-content-sm-center">
    <b-col class="text-center" cols="12">
      <h1>Admin</h1>
    </b-col>
    <b-col>
      <b-form @submit.prevent="onSubmit" @reset="onReset">
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
  </b-row>
</template>

<script>
import { bindState } from '@/store';
export default {
  computed: {
    ...bindState('setup', [
      'newGame',
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
