<template>
  <v-chart
    id="test"
    theme="tnLight"
    width="100%"
    height="100%"
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
    data: {
      type: Array,
      default: function() {
        return  []
      }
    },
    colors: {
      type: Array,
      default: function() {
        return  ['#27AF68','#126835','#3EAFFF','#3154B0','#FF6D5B','#C61D1D']   
      }
    },
  },
  watch: {
      data:{
        handler:function(v){
          if(v.length>0){
            // this.series.length = v.length
            for(var i = 0;i<v.length;i++){
              this.series[i] = {}
              var tempArr = []
              tempArr.length = v.length
              tempArr[i] = v[i].value
              this.series[i].data = tempArr
              var colors = this.colors
              this.$set(this.series, i, { 
                name:v[i].name,
                type:'bar',
                data:tempArr,
                itemStyle:{
                  normal: {
                    // color:function(i){
                    //   var colors = ['#27AF68','#126835','#3EAFFF','#3154B0','#FF6D5B','#C61D1D']
                    //   return new graphic.LinearGradient(0, 0, 1, 0, [ 
                    //     {
                    //       offset: 0,
                    //       color: colors[i.dataIndex*2], //第一颜色
                    //     },
                    //     {
                    //       offset: 1,
                    //       color: colors[i.dataIndex*2+1], //渐变颜色
                    //     }])
                    // }                
                    color: new graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 1, color: colors[i*2]
                    },{
                        offset: 0, color: colors[i*2+1]
                    }], false, colors), 
                  }
                },
                // color:
              })
              this.yAxisData[i] = v[i].name
            }  
          }  
        },
        deep:true,
        immediate: true
      } 
  },
  computed: {
    options() {
      return {
        title: { text: this.title },
        legend: {
          top:'15%'
        },
        textStyle: {
          fontSize: 18,
          color:'#fff'
        },
        // color: ['#27AF68','#126835','#3EAFFF','#3154B0','#FF6D5B','#C61D1D'],
        tooltip: {},
        grid: { 
          left: '4.5%',
          right: '8%',
          bottom: '5%',
          top: '20%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false,
             lineStyle:{
              // color:'#487EB3'
             }
          },
          axisTick:{
             show:false
          }, 
          axisLine:{
            lineStyle:{
              color:'#487EB3'
            }
          },
          axisLabel: {
            color: '#fff',
            formatter: '{value}%',
            fontSize: 18,
          }
        },
        yAxis: {
          type: 'category',
          splitLine: {
            show: false,
             lineStyle:{
              // color:'#487EB3'
             }
          },
          data: this.yAxisData,
          splitNumber : 5,
          axisLine: {
            lineStyle:{
              color:'#487EB3'
            }
          },
          axisTick:{
             show:false
          },
          axisLabel: {
            color: '#fff',
            fontSize: 18,
          }
        },
        series: this.series,
        // textStyle:{

        // }
      };
    }
  },
  data () {
    return {
      series:[],
      yAxisData:[],
      legendData:[]
      // aaa:0,
      // tag:''
    }
  }
};
</script>
