<template>
  <b-row>
    <b-col>
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

