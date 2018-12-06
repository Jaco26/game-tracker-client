<template>
  <div>
    <b-row 
      v-for="playerInstance in gamePlayerInstances" 
      :key="playerInstance.id" 
      class="my-3"
    >
      <b-col>
        <b-card>
          <b-row>
            <b-col class="text-left">
              <h4>{{playerInstance.name}}</h4>
            </b-col>
            <b-col class="text-right">
              <b-button class="mx-2" size="sm" variant="warning" @click="leaveGame(playerInstance.playerId, playerInstance.id)">Leave Game</b-button>
              <b-dropdown size="sm" variant="info" text="Choose Role" boundary="viewport">
                <b-dropdown-item 
                  v-for="role in $store.state.setup.roles"
                  :key="role.id"
                  :disabled="selectedRoleIds.includes(role.id)"
                  @click="$store.dispatch('setup/chooseRole', { roleId: role.id, playerId: playerInstance.playerId })"
                >
                  <span :style="playerInstance.role && playerInstance.role.id === role.id ? 'color: blue' : ''">{{role.name}}</span>
                </b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <span v-if="playerInstance.role"><strong><i>{{playerInstance.role.name}}</i></strong></span>
              <span v-else>No Role Assigned</span>
              <div v-if="playerInstance.role">
                {{playerInstance.role.description}}
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    gamePlayerInstances: {
      type: Array,
      required: true,
    },
    selectedRoleIds: {
      type: Array,
      required: true,
    },
  },
  methods: {
    leaveGame(playerId, playerInstanceId) {
      this.$store.dispatch('setup/leaveGame', { playerId, playerInstanceId })
    }
  }
}
</script>

