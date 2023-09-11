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
  echarts.registerTheme('tnDark', {
    'color': [
      '#3183ff',
      '#00f2a3',
      '#ffe700',
      '#ff7238',
      '#ff4d58'
    ],
    'backgroundColor': 'rgba(23,24,25,1)',
    'textStyle': {},
    'title': {
      'textStyle': {
        'color': '#b5d8ff'
      },
      'subtextStyle': {
        'color': '#99c0eb'
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
          'barBorderColor': '#cccccc'
        },
        'emphasis': {
          'barBorderWidth': 0,
          'barBorderColor': '#cccccc'
        }
      }
    },
    'pie': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      }
    },
    'scatter': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      }
    },
    'boxplot': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      }
    },
    'parallel': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      }
    },
    'sankey': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      }
    },
    'funnel': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      }
    },
    'gauge': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      }
    },
    'candlestick': {
      'itemStyle': {
        'normal': {
          'color': '#ff4d58',
          'color0': '#00f2a3',
          'borderColor': '#ff4d58',
          'borderColor0': '#00f2a3',
          'borderWidth': 1
        }
      }
    },
    'graph': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#cccccc'
        }
      },
      'lineStyle': {
        'normal': {
          'width': 1,
          'color': '#aaaaaa'
        }
      },
      'symbolSize': 4,
      'symbol': 'emptyCircle',
      'smooth': false,
      'color': [
        '#3183ff',
        '#00f2a3',
        '#ffe700',
        '#ff7238',
        '#ff4d58'
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
          'areaColor': '#375975',
          'borderColor': '#4fb6ff',
          'borderWidth': '0.5'
        },
        'emphasis': {
          'areaColor': 'rgba(79,182,255,1)',
          'borderColor': '#4fb6ff',
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
            'color': 'rgb(255,255,255)'
          }
        }
      }
    },
    'geo': {
      'itemStyle': {
        'normal': {
          'areaColor': '#375975',
          'borderColor': '#4fb6ff',
          'borderWidth': '0.5'
        },
        'emphasis': {
          'areaColor': 'rgba(79,182,255,1)',
          'borderColor': '#4fb6ff',
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
            'color': 'rgb(255,255,255)'
          }
        }
      }
    },
    'categoryAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': '#193683'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#193683'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#dff4ff'
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
          'color': '#193683'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#091942'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#dff4ff'
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': [
            '#1e3773'
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
          'color': '#193683'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#091942'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#dff4ff'
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': [
            '#1e3773'
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
          'color': '#193683'
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': '#091942'
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': '#dff4ff'
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': [
            '#1e3773'
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
          'borderColor': '#2a4f75'
        },
        'emphasis': {
          'borderColor': '#3183ff'
        }
      }
    },
    'legend': {
      'textStyle': {
        'color': '#dff4ff'
      }
    },
    'tooltip': {
      'axisPointer': {
        'lineStyle': {
          'color': '#3183ff',
          'width': '1'
        },
        'crossStyle': {
          'color': '#3183ff',
          'width': '1'
        }
      }
    },
    'timeline': {
      'lineStyle': {
        'color': '#5396f5',
        'width': '1'
      },
      'itemStyle': {
        'normal': {
          'color': '#000000',
          'borderWidth': '0'
        },
        'emphasis': {
          'color': '#5396f5'
        }
      },
      'controlStyle': {
        'normal': {
          'color': '#5396f5',
          'borderColor': '#5396f5',
          'borderWidth': 0.5
        },
        'emphasis': {
          'color': '#5396f5',
          'borderColor': '#5396f5',
          'borderWidth': 0.5
        }
      },
      'checkpointStyle': {
        'color': '#3183ff',
        'borderColor': 'rgba(48,127,184,0.5)'
      },
      'label': {
        'normal': {
          'textStyle': {
            'color': '#dff4ff'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': '#dff4ff'
          }
        }
      }
    },
    'visualMap': {
      'color': [
        '#ff4d58',
        '#3183ff'
      ]
    },
    'dataZoom': {
      'backgroundColor': 'rgba(47,69,84,0)',
      'dataBackgroundColor': 'rgba(47,69,84,0.3)',
      'fillerColor': 'rgba(167,183,204,0.4)',
      'handleColor': '#a7b7cc',
      'handleSize': '100%',
      'textStyle': {
        'color': '#dff4ff'
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
