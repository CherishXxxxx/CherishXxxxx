<!--柏拉图-->
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
          dimensions: ['product', '蒸发量', '降水量', '平均温度'],
          source: [
            { product: '1月', '蒸发量': 43.3, '降水量': 23.3, '平均温度': 13.3 },
            { product: '2月', '蒸发量': 83.1, '降水量': 24.3, '平均温度': 33.3 },
            { product: '3月', '蒸发量': 86.4, '降水量': 73.3, '平均温度': 33.3 },
            { product: '4月', '蒸发量': 72.4, '降水量': 23.3, '平均温度': 43.3 }
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
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          { type: 'bar', barMaxWidth: 30 },
          { type: 'bar', barMaxWidth: 30 },
          { type: 'line', yAxisIndex: 1 }
        ]
      };
    }
  }
};
</script>
