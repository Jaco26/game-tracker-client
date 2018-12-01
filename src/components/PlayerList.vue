<template>
  <div>
    <b-table
      :items="players"
      :fields="fields"
      hover
      sort-by="name"
      small
    >
      <template slot="actions" slot-scope="data" class="justify-content-end">
        <b-button @click="selectPlayer(data.item.id)" variant="info">Select</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { bindState } from '@/store';
export default {
  computed: {
    ...bindState('setup', [
      'players',
    ]),
  },
  data() {
    return {
      currentPage: 1,
      fields: {
        name: {
          label: 'Name',
        },
        actions: {
          label: 'Actions',
          class: 'd-flex justify-content-end'
        },
      },
    };
  },
  methods: {
    selectPlayer(playerId) {
      this.$store.dispatch('setup/fetchPlayer', playerId);
    }
  }
};
</script>
