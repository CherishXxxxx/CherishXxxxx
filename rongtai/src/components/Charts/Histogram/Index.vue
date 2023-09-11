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
    height: Number,
    data: {
      type: Object,
      default: function() {
        return {
          dimensions: ['product', '2015'],
          source: [
            { product: 'Matcha Latte', '2015': 43.3 },
            { product: 'Milk Tea', '2015': 83.1 },
            { product: 'Cheese Cocoa', '2015': 86.4 },
            { product: 'Walnut Brownie', '2015': 72.4 }
          ]
        };
      }
    }
  },
  computed: {
    options() {
      return {
        title: { text: this.title },
        legend: {},
        grid: { containLabel: true },
        tooltip: {},
        dataset: {
          dimensions: this.data.dimensions,
          source: this.data.source
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar', barMaxWidth: 30 }]
      };
    }
  }
};
</script>
