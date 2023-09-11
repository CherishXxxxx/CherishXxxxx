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
            { product: 'Matcha Latte', '2015': 23.3, '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
          ]
        };
      }
    }
  },
  computed: {
    options() {
      return {
        title: { text: this.title },
        tooltip: {},
        legend: {},
        grid: { containLabel: true },
        dataset: {
          dimensions: this.data.dimensions,
          source: this.data.source
        },
        series: [
          {
            type: 'pie',
            radius: ['10%', '50%'],
            roseType: 'radius',
            center: ['50%', '50%']
          }
        ]
      };
    }
  }
};
</script>
