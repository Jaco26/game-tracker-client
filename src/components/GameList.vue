<template>
  <div>
    <b-table 
      :items="games" 
      :fields="fields"
      :per-page="10"
      :current-page="currentPage"
      small
      striped 
      hover
    >
      <template slot="actions" slot-scope="row">
        <b-button 
          :disabled="$route.name !== 'admin'" 
          @click="deleteGame(row.item.id)" 
          :variant="$route.name === 'admin' ? 'danger' : ''"
          size="sm"
        > 
          &times;
        </b-button>
      </template>
    </b-table>
    <b-pagination 
      v-model="currentPage" 
      :total-rows="games.length" 
      :per-page="10"
      align="center" 
    ></b-pagination>    
  </div>
</template>

<script>
import { bindState } from '@/store';
export default {
  computed: {
    ...bindState('setup', [
      'games',
    ]),
  },
  data() {
    return {
      currentPage: 1,
      fields: {
        name: {
          label: 'Game',
        },
        date_created: {
          label: 'Date Created',
          sortable: true,
        },
        date_started: {
          label: 'Date Started',
          sortable: true,
        },
        date_finished: {
          label: 'Date Finished',
          sortable: true,
        },
        status: {
          label: 'Status'
        },
        actions: {
          lable: 'Hi'
        }
      }
    }
  },
  methods: {
    deleteGame(id) {
      this.$store.dispatch('setup/deleteGame', id);
    }
  }
}
</script>

