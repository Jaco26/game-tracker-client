<template>
  <div>
    <b-row v-for="item in items" :key="item.id" class="my-3">
      <b-col>
        <b-card :no-body="show !== item.id">
          <b-row slot="header">
            <b-col class="d-flex justify-content-between align-items-center">
              <h5>{{item.name}}</h5>
              <div class="d-flex align-items-center">
                <slot name="custom-controls" :id="item.id"></slot>
                <b-button class="ml-3" variant="info" size="sm" @click="toggleDetails(item.id)">{{show === item.id ? 'Hide' : 'Details'}}</b-button>
                <b-button-close class="ml-3 delete" @click="deleteGame(item.id)"></b-button-close>
              </div>
            </b-col>
          </b-row>
          <div>
            <div v-if="item.id === show">
              <div v-if="itemsName === 'games'">
                <app-game-list-details :game="item"></app-game-list-details>
              </div>
              <div v-else-if="itemsName === 'players'">
                <app-player-list-details :player="item"></app-player-list-details>
              </div>
              <div v-else-if="itemsName === 'roles'">
                Role details
              </div>
              <div v-else>
                Sorry, I don't know where to find "{{itemsName}}".
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { bindState } from '@/store';
import appGameListDetails from './GameListDetails';
import appPlayerListDetails from './PlayerListDetails';
export default {
  components: {
    appGameListDetails,
    appPlayerListDetails,
  },
  props: {
    itemsName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: null,
    };
  },
  computed: {
    items() {
      return this.$store.state.setup[this.itemsName];
    },
    deleteActionType() {
      switch(this.itemsName) {
        case 'players':
          return 'setup/deletePlayer';
        case 'games':
          return 'setup/deleteGame';
      }
    }
  },
  methods: {
    toggleDetails(itemId) {
      if (this.itemsName === 'players') {
        this.show === itemId ? this.show = null : this.show = itemId;
      } else {
        this.$router.push({ name: 'addGamePlayers', params: { gameId: itemId } })
      }
    },
    deleteGame(itemId) {
      if (this.$store.getters['admin/isAdmin']) {
        const dataType = this.itemsName === 'players' ? 'player' : 'game';
        const confirm = window.confirm(`Are you sure? All ${dataType} data will be lost!`);
        if (confirm) {
          this.$store.dispatch(this.deleteActionType, itemId);
        }
      } else {
        alert('You are not authorized to delete this item!'.toUpperCase())
      }
      
    },
  },
}
</script>
