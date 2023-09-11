<template>
  <div class="main-container">
    <!--车间抬头-->
    <tnHeader :shopName="shopCurName"/>
    <div class="shop-content content-container">
        <div class="border table-container">
          <span class="title">原材料报检信息</span>
          <tnTable ref="tnListRef1" :colConfigs="colConfigs1" :rowStyle="rowStyle" />
        </div>
        <div class="border table-container">
          <span class="title">原材料送检/状态</span>
          <tnTable ref="tnListRef2" :colConfigs="colConfigs2" :rowStyle="rowStyle" />
        </div>
        <div class="border table-main" >
          <span class="title">熔炼（铝锭）领料信息</span>
          <tnTable ref="tnListRef3" :colConfigs="colConfigs3" :rowStyle="rowStyle" />
        </div>
    </div>
  </div>
</template>
<script>
import tnTable from '@/components/TVTable'
import tnHeader from './components/TnHeader'

import api from '@/fetch/dataApi';
export default {
  components:{tnTable,tnHeader},
  data () {
    return {
      shopCurName:'原材料仓库看板',
      dataTimer: null,
      lineTimmer: null,
      lineNum: 5,
      rowStyle: {
          height: '50px',
          fontSize: '20px !important',
          lineHeight: '50px',
          padding: 0,
      },
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      colConfigs1: [
        { label: '序号', prop: 'id' ,width:'80'},
        { label: '订单号', prop: 'order_id',width:'180' },
        { label: '到货日期', prop: 'arrival_date',width:'130'},
        { label: '创建时间', prop: 'create_time',width:'225'},      
        { label: '状态', prop: 'state',width:'80'},
      ],
      colConfigs2: [
        { label: '序号', prop: 'id',width:'60' },
        { label: '条码', prop: 'lot_no' ,width:'180'},
        { label: '订单号', prop: 'order_id',width:'175'},
        { label: '创建时间', prop: 'create_time',width:'225'},      
        { label: '结果', prop: 'state',width:'65'},
      ],
      colConfigs3: [
        { label: '序号', prop: 'id',width:'120' },
        { label: '条码', prop: 'lot_no' ,width:'360'},
        { label: '订单号', prop: 'order_id',width:'425'},
        { label: '创建时间', prop: 'create_time',width:'400'},      
        { label: '结果', prop: 'state',width:'130'},
      ]
    }
  },
  created(){
    this.getTableData();
    this.dataTimer = setInterval(()=>{
      this.getTableData()
    },30000);
  },
  methods: {
    getTableData(){
      api.getTableData1().then(res => {
        this.tableData1 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef1.switch(this.tableData1, {
              timer: 15000,
              pageSize: this.lineNum
            });   
        });
      }).catch((err) => {
        console.log(err)
      });
      api.getTableData2().then(res => {
        this.tableData2 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef2.switch(this.tableData2, {
              timer: 15000,
              pageSize: this.lineNum
            });   
        });
      }).catch((err) => {
        console.log(err)
      });
      api.getTableData3().then(res => {
        this.tableData3 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef3.switch(this.tableData3, {
              timer: 15000,
              pageSize: this.lineNum
            });   
        });
      }).catch((err) => {
        console.log(err)
      });
      api.getTableData4().then(res => {
        this.tableData4 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef4.switch(this.tableData4, {
              timer: 15000,
              pageSize: this.lineNum
            });   
        });
      }).catch((err) => {
        console.log(err)
      });
    } 
  },
  beforeDestroy () {
    if(this.dataTimer){
      clearInterval(this.dataTimer)
    }
  }
}
</script>
<style lang="scss" scoped>
.content-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 99%;
  .table-container{
    width: 48.6%; 
    padding: 10px;
    margin-top: 10px;
  }
  .table-main{
    width: 100%; 
    padding: 10px;
    margin-top: 10px;
  }
}
</style>