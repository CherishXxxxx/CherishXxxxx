(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
}(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  echarts.registerTheme('tnLight', {
    'color': [
      '#5298ff',
      '#ff7980',
      '#ff9c00',
      '#16db2f',
      '#ffc42c'
    ],
    'backgroundColor': 'rgba(0, 0, 0, 0)',
    'textStyle': {},
    'title': {
      'textStyle': {
        'color': '#333'
      },
      'subtextStyle': {
        'color': '#868d96'
      }
    },
    'line': {
      'itemStyle': {
        'normal': {
          'borderWidth': 1
        }
      },
      'lineStyle': {
        'normal': {
          'width': 2
        }
      },
      'symbolSize': 4,
      'symbol': 'emptyCircle',
      'smooth': false
    },
    'radar': {
      'itemStyle': {
        'normal': {
          'borderWidth': 1
        }
      },
      'lineStyle': {
        'normal': {
          'width': 2
        }
      },
      'symbolSize': 4,
      'symbol': 'emptyCircle',
      'smooth': false
    },
    'bar': {
      'itemStyle': {
        'normal': {
          'barBorderWidth': 0,
          'barBorderColor': '#f2c2c2'
        },
        'emphasis': {
          'barBorderWidth': 0,
          'barBorderColor': '#f2c2c2'
        }
      }
    },
    'pie': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      }
    },
    'scatter': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      }
    },
    'boxplot': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      }
    },
    'parallel': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      }
    },
    'sankey': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      }
    },
    'funnel': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      }
    },
    'gauge': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      }
    },
    'candlestick': {
      'itemStyle': {
        'normal': {
          'color': '#ff525e',
          'color0': '#16db2f',
          'borderColor': '#ff525e',
          'borderColor0': '#16db2f',
          'borderWidth': 1
        }
      }
    },
    'graph': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#f2c2c2'
        }
      },
      'lineStyle': {
        'normal': {
          'width': 1,
          'color': '#f2c2c2'
        }
      },
      'symbolSize': 4,
      'symbol': 'emptyCircle',
      'smooth': false,
      'color': [
        '#5298ff',
        '#ff7980',
        '#ff9c00',
        '#16db2f',
        '#ffc42c'
      ],
      'label': {
        'normal': {
          'textStyle': {
            'color': '#ffffff'
          }
        }
      }
    },
    'map': {
      'itemStyle': {
        'normal': {
          'areaColor': '#c2e6ff',
          'borderColor': '#1674f7',
          'borderWidth': '0.5'
        },
        'emphasis': {
          'areaColor': 'rgba(0,163,255,0.8)',
          'borderColor': '#0086ff',
          'borderWidth': 1
        }
      },
      'label': {
        'normal': {
          'textStyle': {
            'color': '#333333'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': 'rgb(51,51,51)'
          }
        }
      }
    },
    'geo': {
      'itemStyle': {
        'normal': {
          'areaColor': '#c2e6ff',
          'borderColor': '#1674f7',
          'borderWidth': '0.5'
        },
        'emphasis': {
          'areaColor': 'rgba(0,163,255,0.8)',
          'borderColor': '#0086ff',
          'borderWidth': 1
        }
      },
      'label': {
        'normal': {
          'textStyle': {
            'color': '#333333'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': 'rgb(51,51,51)'
          }
        }
      }
    },
    'categoryAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': '#c1cfe3'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#f0f4f8'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#868d96'
        }
      },
      'splitLine': {
        'show': false,
        'lineStyle': {
          'color': [
            '#ccc'
          ]
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.3)',
            'rgba(200,200,200,0.3)'
          ]
        }
      }
    },
    'valueAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': '#c1cfe3'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#9da7b3'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#868d96'
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': [
            '#f0f4f8'
          ]
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.3)',
            'rgba(200,200,200,0.3)'
          ]
        }
      }
    },
    'logAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': '#c1cfe3'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#9da7b3'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#868d96'
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': [
            '#f0f4f8'
          ]
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.3)',
            'rgba(200,200,200,0.3)'
          ]
        }
      }
    },
    'timeAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': '#c1cfe3'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#9da7b3'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#868d96'
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': [
            '#f0f4f8'
          ]
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.3)',
            'rgba(200,200,200,0.3)'
          ]
        }
      }
    },
    'toolbox': {
      'iconStyle': {
        'normal': {
          'borderColor': '#b2bed1'
        },
        'emphasis': {
          'borderColor': '#5298ff'
        }
      }
    },
    'legend': {
      'textStyle': {
        'color': '#868d96'
      }
    },
    'tooltip': {
      'axisPointer': {
        'lineStyle': {
          'color': '#5298ff',
          'width': '1'
        },
        'crossStyle': {
          'color': '#5298ff',
          'width': '1'
        }
      }
    },
    'timeline': {
      'lineStyle': {
        'color': '#c1cfe3',
        'width': 1
      },
      'itemStyle': {
        'normal': {
          'color': '#c1cfe3',
          'borderWidth': '1'
        },
        'emphasis': {
          'color': '#5298ff'
        }
      },
      'controlStyle': {
        'normal': {
          'color': '#868d96',
          'borderColor': '#868d96',
          'borderWidth': 0.5
        },
        'emphasis': {
          'color': '#868d96',
          'borderColor': '#868d96',
          'borderWidth': 0.5
        }
      },
      'checkpointStyle': {
        'color': '#3388ff',
        'borderColor': 'rgba(115,180,255,0.5)'
      },
      'label': {
        'normal': {
          'textStyle': {
            'color': '#868d96'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': '#868d96'
          }
        }
      }
    },
    'visualMap': {
      'color': [
        '#217cff',
        '#ff525e',
        '#ffc669'
      ]
    },
    'dataZoom': {
      'backgroundColor': 'rgba(47,69,84,0)',
      'dataBackgroundColor': 'rgba(47,69,84,0.3)',
      'fillerColor': 'rgba(167,183,204,0.4)',
      'handleColor': '#a7b7cc',
      'handleSize': '100%',
      'textStyle': {
        'color': '#868d96'
      }
    },
    'markPoint': {
      'label': {
        'normal': {
          'textStyle': {
            'color': '#ffffff'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': '#ffffff'
          }
        }
      }
    }
  });
}));
