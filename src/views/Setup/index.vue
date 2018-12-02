<template>
  <b-row class="justify-content-sm-center">
    <b-col sm="11">
      <b-tabs card v-model="tabIndex">
        <b-tab title="Players">
          <app-new-player-form></app-new-player-form>
          <h3>Players</h3>
          <app-setup-item-list itemsName="players"></app-setup-item-list>
        </b-tab>
        
        <b-tab title="Games">
          <app-new-game-form></app-new-game-form>
          <hr>
          <h3>Games:</h3>
          <app-setup-item-list itemsName="games">
           <div slot="custom-controls" slot-scope="item">
             <b-button size="sm" @click="registerPlayers(item.id)">Add Players</b-button>
           </div>
          </app-setup-item-list>
        </b-tab>
        
        <!-- <b-tab title="Choose Game Players">
          Choose Game Players
          <b-row>
            <b-col cols="sm-4">
              <h2>Players</h2>
              <app-setup-item-list itemsName="players"></app-setup-item-list>
            </b-col>
            <b-col cols="sm-4">
              <h2>Games</h2>
              <app-setup-item-list itemsName="games"></app-setup-item-list>
            </b-col>
            <b-col cols="sm-4">
              <h2>Roles</h2>
              <app-setup-item-list itemsName="roles"></app-setup-item-list>
            </b-col>
          </b-row>
        </b-tab> -->

      </b-tabs>
    </b-col>
  </b-row>
</template>

<script>
import { bindState } from '@/store';
import appSetupItemList from '@/components/SetupItemList'
import appNewPlayerForm from '@/components/NewPlayerForm';
import appNewGameForm from '@/components/NewGameForm';
export default {
  components: {
    appSetupItemList,
    appNewPlayerForm,
    appNewGameForm,
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
      tabIndex: 1,
    }
  },
  methods: {
    onSubmit() {
      if (this.newPlayer) {
        this.$store.dispatch('setup/addPlayer');
      }
    },
    registerPlayers(gameId) {
      console.log(gameId);
      
    }
  },
}
</script>
