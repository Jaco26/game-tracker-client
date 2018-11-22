<template>
  <div>
    <b-table
      :items="players"
      :fields="fields"
      striped
      hover
      sort-by="name"
      small
    ></b-table>
  </div>
</template>

<script>
import { bindState } from '@/store';
export default {
  computed: {
    ...bindState('setup', [
      'players'
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
          label: 'Booga booga'
        },
      },
    };
  },
};
</script>
