<template>
  <b-row class="justify-content-sm-center">
    <b-col sm="10">
      <b-tabs  card v-model="tabIndex">
        <b-tab title="Register Player">
          <b-form @submit.prevent="onSubmit" @reset="onReset" autocomplete="off">
            <b-form-group
              label="Enter your name"
              label-for="new-player"
            >
              <b-form-input
                id="new-player"
                v-model.trim="newPlayer"
                placeholder="Enter your name"
              ></b-form-input>
              <b-form-text>
                You must enter a unique name; one that doesn't appear below.
              </b-form-text>
            </b-form-group>
          </b-form>
          <h3>Been Here Before?</h3>
          <!-- <app-player-list></app-player-list> -->
        </b-tab>
        
        <b-tab title="Register Game">
          Register Game
          <app-game-list></app-game-list>
        </b-tab>
        
        <b-tab title="Choose Game Players">
          Choose Game Players
        </b-tab>

      </b-tabs>
    </b-col>
  </b-row>
</template>

<script>
import { bindState } from '@/store';
// import appPlayerList from '@/components/PlayerList'
import appGameList from '@/components/GameList';
// import appRoleList from '@/components/RoleList';
export default {
  components: {
    // appPlayerList,
    appGameList,
    // appRoleList,
  },
  computed: {
    ...bindState('setup', [
      'newPlayer',
    ]),
    ...bindState('user', [
      'playerId',
      'gameId'
    ]),
  },
  data() {
    return {
      tabIndex: 0,
    }
  },
  methods: {
    onReset() {
      this.newPlayer = '';
    },
    onSubmit() {
      if (this.newPlayer) {
        this.$store.dispatch('setup/addPlayer');
      }
    },
  },
}
</script>
