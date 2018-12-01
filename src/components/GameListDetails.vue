<template>
  <b-row>
    <b-col>
      <h4>Players:</h4>
      <hr>
      <ul>
        <li v-for="p in game.game_players" :key="p.player.name">
          {{p.player.name}}
        </li>
      </ul>
    </b-col>
    <b-col>
      <h4>Status</h4>
      <hr>
      {{game.status}}
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>

