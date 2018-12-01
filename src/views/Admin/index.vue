<template>
  <b-row class="justify-content-sm-center">
    <b-col class="text-center" cols="12">
      <h1>Admin</h1>
    </b-col>
    <b-col cols="10">
      <b-form-input
        size="lg"
        type="password"
        v-model="adminKey"
      ></b-form-input>
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
    ...bindState('admin', [
      'adminKey',
    ]),
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
