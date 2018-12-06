<template>
  <div v-if="game">
    <b-row>
      <b-col>
        <h1>{{game.name}}</h1>
      </b-col>
    </b-row>
    <b-row class="mt-1">
      <b-col>
        Date Created: <strong>{{game.date_created}}</strong> 
      </b-col>
      <b-col>
        Date Started: <strong>{{game.date_started || 'N/A'}}</strong>
      </b-col>
      <b-col>
        Date Finished: <strong>{{game.date_finished || 'N/A'}}</strong>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <div class="d-flex justify-content-between">
          <h2>Players</h2>
          <div>
            <b-dropdown variant="primary" boundary="viewport" text="Add Players">
              <b-dropdown-header v-if="notJoinedPlayers.length === 0">All players have joined this game</b-dropdown-header>
              <b-dropdown-item 
                v-for="p in notJoinedPlayers" 
                :key="p.id"
                @click="$store.dispatch('setup/joinGame', { playerId: p.id })"
              >
                {{p.name}}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>

        <app-game-player-list 
          :selectedRoleIds="selectedRoleIds" 
          :gamePlayerInstances="gamePlayers"
        ></app-game-player-list>

      </b-col>
    </b-row>
  </div>
</template>

<script>
import { bindState } from '@/store';
import appGamePlayerList from './GamePlayerList'
export default {
  components: {
    appGamePlayerList
  },
  computed: {
    ...bindState('setup', [
      'selectedGameId',
      'players',
      'roles',
    ]),
    game() {
      return this.$store.getters['setup/selectedGame'];
    },
    gamePlayers() {
      const players = this.game.game_players.reduce((a, b) => {
        a.push({
          id: b.id, // player_instance id
          name: b.player.name,
          playerId: b.player.id,
          role: b.role,
        });
        return a;
      }, []);
      return players.sort((a, b) => a.name > b.name ? 1 : -1);
    },
    selectedRoleIds() {
      return this.game.game_players.reduce((a, gp) => {
        if (gp.role) a.push(gp.role.id);
        return a;
      }, []);
    },
    notJoinedPlayers() {
      const gamePlayerIds = this.game.game_players.map(gp => gp.player.id);
      return this.players.filter(p => !gamePlayerIds.includes(p.id));
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.selectedGameId = vm.$route.params.gameId;
    });
  }
}
</script>
