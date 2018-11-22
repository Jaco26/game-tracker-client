<template>
  <b-row class="justify-content-sm-center">
    <b-col class="text-center" cols="12" >
      <h1>Login</h1>
    </b-col>
    <b-col sm="10">
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab title="Register">
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
            <app-player-list></app-player-list>
          </b-tab>
          <b-tab title="Join Game">
            <app-game-list></app-game-list>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { bindState } from '@/store';
import appPlayerList from '@/components/PlayerList'
import appGameList from '@/components/GameList';
export default {
  components: {
    appPlayerList,
    appGameList,
  },
  computed: {
    ...bindState('setup', [
      'newPlayer',
    ]),
  },
  data() {
    return {
      tabIndex: 0,
    }
  },
  methods: {
    onReset() {

    },
    onSubmit() {

    },
  },
}
</script>
