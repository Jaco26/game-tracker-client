<template>
  <b-row>
    <b-col>
      <h4>Player Games:</h4>
      <pre>
        {{player}}
      </pre>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

