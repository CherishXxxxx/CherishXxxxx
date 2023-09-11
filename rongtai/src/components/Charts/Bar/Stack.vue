<!--堆叠条形图-->
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
            { product: 'Milk Tea', '2015': 43.1, '2016': 24.3 },
            { product: 'Cheese Cocoa', '2015': 56.4, '2016': 73.3 },
            { product: 'Walnut Brownie', '2015': 12.4, '2016': 53.3 }
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
            barMaxWidth: 30,
            stack: '总量',
            encode: {
              // Map the "2015" column to X axis.
              x: '2015',
              // Map the "product" column to Y axis
              y: 'product'
            }
          },
          {
            type: 'bar',
            stack: '总量',
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
