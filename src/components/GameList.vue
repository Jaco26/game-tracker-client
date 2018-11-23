<template>
  <div>
    <b-table 
      :items="games" 
      :fields="fields"
      :per-page="10"
      :current-page="currentPage"
      sort-by="date_created"
      sort-desc
      small
      striped 
      hover
    >
      <template slot="actions" slot-scope="row">
        <b-button 
          v-if="$route.name === 'admin'"
          @click="deleteGame(row.item.id)" 
          variant="danger"
          size="sm"
        > 
          &times;
        </b-button>
        <b-button 
          v-if="$route.name === 'login'"
          @click="joinGame(row.item.id)" 
          variant="info"
          size="sm"
        > 
          Join
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
    deleteGame(gameId) {
      this.$store.dispatch('setup/deleteGame', gameId);
    },
    joinGame(gameId) {
      this.$store.dispatch('setup/joinGame', gameId);
    }
  }
}
</script>

