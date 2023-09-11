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
          dimensions: ['product', '2015', '2016', '2017'],
          source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 23.3, '2017': 13.3 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 24.3, '2017': 63.3 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 73.3, '2017': 43.3 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 23.3, '2017': 43.3 }
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
        tooltip: {},
        grid: { containLabel: true },
        dataset: {
          dimensions: this.data.dimensions,
          source: this.data.source
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          { type: 'line', smooth: true },
          { type: 'line', smooth: true },
          { type: 'line', smooth: true }
        ]
      };
    }
  }
};
</script>
