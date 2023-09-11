<!--多行条形图-->
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
          source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 63.3 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 24.3 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 73.3 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 23.3 }
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: { containLabel: true },
        dataset: { source: this.data.source },
        xAxis: {},
        yAxis: { type: 'category' },
        series: [
          {
            type: 'bar',
            encode: {
              x: '2015',
              y: 'product'
            }
          },
          {
            type: 'bar',
            encode: {
              x: '2016',
              y: 'product'
            }
          }
        ]
      };
    }
  }
};
</script>
