<template>
  <div>
    <b-row 
      v-for="p in gamePlayers" 
      :key="p.id" 
      class="my-3"
    >
      <b-col>
        <b-card>
          <b-row>
            <b-col class="text-left">
              <h4>{{p.name}}</h4>
            </b-col>
            <b-col class="text-right">
              <b-dropdown size="sm" text="Choose Role" boundary="viewport">
                <b-dropdown-item 
                  v-for="role in roles"
                  :key="role.id"
                  :disabled="selectedRoleIds.includes(role.id)"
                >
                  {{role.name}}
                </b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h5 class="d-inline">Role:</h5>
              &nbsp;
              <span v-if="p.role">{{p.role.name}}</span>
              <span v-else>None</span>

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
    gamePlayers: {
      type: Array,
      required: true,
    },
    selectedRoleIds: {
      type: Array,
      required: true,
    }
  },
  computed: {
    roles() {
      return this.$store.state.setup.roles;
    }
  }
}
</script>

