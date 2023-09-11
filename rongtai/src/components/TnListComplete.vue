<template>
  <el-table
    :data="tableData"
    :row-style="rowStyle"
    :cell-style="cellStyle"
    stripe
    style="width: 100%">
    <el-table-column 
      v-for="(item,index) in listItem" :key="index" 
      :label="item.desc" 
      :prop="item.name" 
      :width="item.width"
      :align="item.center?'center':'left'"
    >
      <template slot-scope="scope">
      <template v-if="item.alias == 1">
        <span v-if="scope.row.state==3"><span class="A base"/></span>
        <span v-if="scope.row.state==1"><span class="B base"/></span>
        <span v-if="scope.row.state==2"><span class="C base"/></span>
        <span v-if="scope.row.state==0"><span class="D base"/></span>
      </template>
      <template v-if="item.alias == 2">
        <div class="progress-inner">
          <div :style="{width:scope.row[item.name]+'%'}" class="progress-bg">
           <span class="progress-text">{{ scope.row[item.name]?(scope.row[item.name]):0 }}%</span>
          </div>
        </div>
      </template>
      <template v-if="!item.alias">
          <span style="margin-left: 10px">{{ scope.row[item.name] }}</span>
      </template>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    listItem: Array,
    dataApi: Object,
    showBlank: {
      type: Boolean,
      default: false
    },
    switch: {
      type: Object,
      default: () => {
        return {
          switchTimer: 10000,
          switchQty: 6,
          switchTempTable: null
        };
      }
    },
    rowStyle: {
      type: Object,
      default: () => {
        return {
          height: '44px',
          fontSize: '16px !important',
          lineHeight: '44px',
          padding: 0,
          borderBottom: '1px solid rgb(20,53,132)'
        };
      }
    }
  },
  data() {
    return {
      tableData: [], // 列表所有数据
      switchStopTimer: null,
      tempArr: [],
      curIndex: 0
    };
  },
  computed: {
    initSwitch(){
      console.log('initSwitch')
      const obj = {};
      if (this.listItem){
        obj.switchTimer = this.switch.switchTimer;
        obj.switchQty = this.switch.switchQty;
        if (this.switch.switchTempTable){
          obj.switchTempTable = this.switch.switchTempTable;
        } else {
          // obj.switchTempTable = this.getLabel(this.listItem);
        }
      }
      console.log(obj)
      return obj;
    }
  },
  methods: {
    tableSwitch(data) {
      if (this.switchStopTimer) {
        window.clearInterval(this.switchStopTimer);
      }
      this.curIndex = 0;
      var resArr;
      resArr = data;
      // console.log(resArr)
      // console.log(this.initSwitch)
      var pageCount = Math.ceil(resArr.length / this.initSwitch.switchQty);
      // 返回的数据不足一页时
      if (pageCount <= 1) {
        // var noTemp = this.initSwitch.switchQty - resArr.length;
        // for (let i = 0; i < noTemp; i++) {
        //   resArr.push(this.initSwitch.switchTempTable);
        // }
        console.log(resArr)
        this.tableData = resArr;
      } else {
        var curPageSize;
        if (this.showPageLabel){
          curPageSize = this.initSwitch.switchQty - 1;
        } else {
          curPageSize = this.initSwitch.switchQty;
        }
        this.switchStopTimer = setInterval(() => {
          pageCount = Math.ceil(resArr.length / curPageSize);
          this.curIndex++;
          if (this.curIndex > pageCount - 1) {
            this.curIndex = 0;
          }
          this.tableData = resArr.slice(this.curIndex * curPageSize, (this.curIndex + 1) * curPageSize);
        }, this.initSwitch.switchTimer);
        // 如果当前的高亮的index 大于总页数 则显示第一个高亮，当前curIndex = 0
        if (this.curIndex > pageCount - 1) {
          this.curIndex = 0;
        }
        this.tableData = resArr.slice(this.curIndex * curPageSize, (this.curIndex + 1) * curPageSize);
      }
      this.tempArr.length = pageCount;
    },
    getLabel(v){
      const res = {};
      v.forEach((v) => {
        res[v.name] = '-';
      });
      console.log(res)
      return res;
    }
  }
};
</script>
<style lang="scss">
    .base {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-block;
        line-height: 100%
    }

    .highlight {
        background-color: rgb(24, 144, 255) !important
    }

    .A {
        background-color: #1890FF

    }

    .B {
        background-color:#2DBA4B
    }

    .C {
        background-color: #FF8B32
    }

    .D {
        background-color: #FF3A3A
    }

    .E {
        background-color: #2DBA4B
    }
    .progress-inner {
        width: 100%;
        height: 28px;
        background:rgba(16,45,98,1);
        position: relative;
        overflow: hidden;
        .progress-bg {
          height: 100%;
          text-align: center;
          background:rgba(16,163,74,1);
        }
        .progress-text {
          height: 28px;    
          font-size: 16px;
          color: #fff;
        }
    }    
</style>
