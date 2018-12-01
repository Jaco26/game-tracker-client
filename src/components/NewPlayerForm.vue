<template>
  <b-form @submit.prevent="onSubmit" autocomplete="off">
    <b-form-group>
      <b-form-input
        id="new-player"
        v-model.trim="newPlayer"
        size="lg"
        placeholder="Enter new player name"
      ></b-form-input>
      <b-form-text>
        You must enter a unique name; one that doesn't appear below.
      </b-form-text>
    </b-form-group>
  </b-form>
</template>

<script>
import { bindState } from '@/store';
export default {
  computed: {
    ...bindState('setup', [
      'newPlayer',
      'players'
    ]),
  },
  methods: {
    onSubmit() {
      const nameIsUnique = !this.players.map(p => p.name).includes(this.newPlayer);
      if (this.newPlayer && nameIsUnique) {
        this.$store.dispatch('setup/addPlayer');
      } else {
        alert('You must enter a uniqe name!');
      }
    },
  },
}
</script>

