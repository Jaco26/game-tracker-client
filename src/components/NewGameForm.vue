<template>
  <b-form @submit.prevent="onSubmit" autocomplete="off">
    <b-form-group>
      <b-form-input
        id="new-game"
        v-model.trim="newGame"
        type="text"
        size="lg"
        placeholder="Enter new game name"
      ></b-form-input>
    </b-form-group>
  </b-form>
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
  methods: {
    onSubmit() {
      const gameIsUnique = !this.games.map(g => g.name).includes(this.newGame);
      if (this.newGame && gameIsUnique) {
        this.$store.dispatch('setup/addGame');
      } else {
        alert('You must enter a uniqe game name!');
      }
    },
  },
}
</script>


