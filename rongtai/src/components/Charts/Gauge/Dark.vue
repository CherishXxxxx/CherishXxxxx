<template>
  <v-chart
    :style="{height: `${height}px !important`}"
    :options="options"
    autoresize
  />
</template>

<script>
export default {
  props: {
    title: String,
    value: {
      type: Number,
      default: 10
    },
    name: {
      type: String,
      default: '指标'
    },
    height: Number
  },
  computed: {
    options() {
      return {
        backgroundColor: 'rgba(23,24,25,1)',
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 100,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.3, '#ff4500'], [0.7, '#4EE3FF'], [1, 'lime']],
                width: 5,
                shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                shadowBlur: 10
              }
            },
            axisTick: { // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                width: 3,
                shadowBlur: 10
              }
            },
            splitLine: { // 橙色分割线
              length: 25,
              lineStyle: {
                width: 3,
                color: '#FCD209'
              }
            },
            itemStyle: { // 指针颜色
              color: '#1e90ff'
            },
            pointer: { // 指针长短
              length: 110
            },
            detail: {
              formatter: '{value}%',
              fontWeight: 600
            },
            title: { // 标题
              fontSize: 20,
              color: '#ffffff',
              offsetCenter: ['0', '70%']
            },
            data: [{ value: this.value, name: this.name }]
          }
        ]
      };
    }
  }
};
</script>
