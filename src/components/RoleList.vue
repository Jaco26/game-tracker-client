<template>
  <div>
    <b-table
      :items="roles"
      :fields="fields"
      hover
    >
      <template slot="actions" slot-scope="row">
        <b-button variant="info" @click="chooseRole(row.item.id)">Choose</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { bindState } from '@/store';
export default {
  computed: {
    ...bindState('setup', [
      'roles',
    ]),
  },
  data() {
    return {
      fields: {
        name: {
          label: 'Role',
        },
        description: {
          label: 'Description',
        },
        actions: {
          label: 'Actions'
        }
      }
    };
  },
  methods: {
    chooseRole(roleId) {
      this.$store.dispatch('setup/chooseRole', roleId);
    }
  }
}
</script>
