<template>
  <v-chart
    theme="tnLight"
    :style="{height: `${height}px !important`}"
    :options="options"
    autoresize
  />
</template>
<!--参考档案-->
<!--https://gallery.echartsjs.com/editor.html?c=xB1GBQvrCb&v=12-->
<script>
var dataFrom = '杭州';
var data = [{
  name: '重庆'
}, {
  name: '北京'
}, {
  name: '苏州'
}, {
  name: '杭州'
}, {
  name: '宁波'
}
];
var geoCoordMap = {
  '重庆': [108.384366, 30.439702],
  '北京': [116.4551, 40.2539],
  '苏州': [120.6519, 31.3989],
  '杭州': [119.5313, 29.8773],
  '宁波': [121.5967, 29.6466]
};
var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];

    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

export default {
  props: {
    title: String,
    height: Number
  },
  computed: {
    options() {
      return {
        title: { text: this.title },
        tooltip: {
          trigger: 'item'
        },
        geo: {
          map: 'china',
          roam: true
        },
        series: [
          {
            name: '杭州',
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.01,
              symbolSize: 6
            },
            lineStyle: {
              normal: {
                width: 2,
                opacity: 0.5,
                curveness: 0.2
              }
            },
            data: data.map(function(dataItem) {
              return {
                fromName: dataFrom,
                toName: dataItem.name,
                coords: [
                  geoCoordMap[dataFrom],
                  geoCoordMap[dataItem.name]
                ]
              };
            })
          },
          {
            name: '供需占比',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 8,
            showEffectOn: 'render',
            rippleEffect: {
              scale: 5,
              brushType: 'stroke'
            },
            hoverAnimation: false,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            }
          }
        ]
      };
    }
  }
};
</script>
