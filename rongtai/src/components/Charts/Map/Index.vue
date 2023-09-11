<template>
  <v-chart
    theme="tnLight"
    :style="{height: `${height}px !important`}"
    :options="options"
    autoresize
  />
</template>

<script>
export default {
  props: {
    title: String,
    height: Number
  },
  computed: {
    options() {
      return {
        title: { text: this.title },
        geo: {
          map: 'china',
          roam: true,
          label: {
            show: true
          }
        }
      };
    }
  }
};
</script>
