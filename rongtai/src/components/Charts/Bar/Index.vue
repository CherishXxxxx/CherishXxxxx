<template>
  <v-chart
    theme="tnLight"
    :options="options"
    autoresize
  />
</template>

<script>
import { graphic } from 'echarts/lib/export'
export default {
  props: {
    title: String,
    height: Number,
    chartData: {
      type: Object,
      default: function() {
        return {
          xData:[1,2,3,4],
          seriesData: [{name:'aaaa',data:[1,2,3,4]}]
        };
      }
    }
  },
  data () {
    return {
      styleArr:[
        {
          type: 'bar',
          // barMaxWidth: 30,
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
        }
      ]
    }
  },
  computed: {
    options() {
      const seriesData = [];
      if (this.chartData.seriesData){
        this.chartData.seriesData.forEach((item, index) => {
          const styleTemp = this.styleArr[index] ? this.styleArr[index] : this.styleArr[0];
          if(item.colors && item.colors.length>1){
             var itemStyle = {
                normal: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color:item.colors[0]
                    }, {
                        offset: 1,
                        color:item.colors[1]
                    }]),
                    opacity: 1,
                }
              }
              item.itemStyle = itemStyle
          } 
          seriesData[index] = Object.assign({}, styleTemp, item);
        });
      }      
      console.log(seriesData)
      return {
        title: { text: this.title },
        legend: {
          show:true,
          left:'5%',
          top:'5%',
          itemGap:40,
          textStyle:{
            color:'#fff'
          }
        },
        tooltip: {},
        textStyle:{
          fontSize : 16,
          color: '#fff'
        },
        grid: { 
          left: '0%',
          right: '0%',
          bottom: '5%',
          top: '15%',
          containLabel: true,
        },
        color:['#3A91E6','#FF5F66','#00C98F'],
        xAxis: {
          type: 'category',
          axisTick:{
             show:false
          }, 
          data: this.chartData.xData,
          // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine:{
            lineStyle:{
              color:'#487EB3'
            }
          },
          axisLabel: {
            fontSize: 18,
            color: '#fff',
            interval:0, //强制显示文字
            rotate:45,//度角倾斜显示
          }
        },
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false,
             lineStyle:{
              color:'#487EB3'
             }
          },
          // max:100,
          // maxInterval:100,
          // interval:20,
          splitNumber : 4,
          axisLine: {
            show:true,
            lineStyle:{
              color:'#B5F2FF'
            }
            // color:'#B5F2FF'
          },
          axisTick:{
             show:true
          },
          axisLabel: {
            color: '#fff',
            fontSize: 20,
            formatter: '{value}'
          }
        },{
          type: 'value',
          splitLine: {
            show: false,
             lineStyle:{
              color:'#487EB3'
             }
          },
          // max:100,
          // maxInterval:100,
          // interval:20,
          splitNumber : 4,
          axisLine: {
            show:true,
          },
          axisTick:{
             show:true
          },
          axisLabel: {
            color: '#fff',
            fontSize: 20,
            formatter: '{value}'
          }
        }],
        series: [
            {
                name: '月产量',
                barWidth: '30%',
                type: 'bar',
                yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                data: this.chartData.seriesData[0]
            },
            {
                name: '废品总数',
                barWidth: '30%',
                type: 'bar',
                yAxisIndex: 0,
                data: this.chartData.seriesData[1]
            },
            {
                name: '合格率',
                barWidth: '30%',
                type: 'line',
                symbol: 'circle',
                lineStyle:{
                  width: 4
                },
                symbolSize: 8, //折线点的大小
                yAxisIndex: 1, ////使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                data: this.chartData.seriesData[2]

            },
            ],
      };
    }
  }
};
</script>
