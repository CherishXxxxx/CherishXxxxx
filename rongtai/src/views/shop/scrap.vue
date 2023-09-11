<template>
  <div class="main-container">
    <!--车间抬头-->
    <tnHeader :shopName="shopCurName"/>
    <div class="shop-content content-container">
        <div class="border table-main">
          <span class="title">废品入库申请信息</span>
          <tnTable ref="tnListRef1" :colConfigs="colConfigs1" :rowStyle="rowStyle" />
        </div>
       <div class="border table-main">
          <span class="title">废品出库申请信息</span>
          <tnTable ref="tnListRef1" :colConfigs="colConfigs1" :rowStyle="rowStyle" />
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
      shopCurName:'废品仓库看板',
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
        { label: '序号', prop: 'id' },
        { label: '设备名称', prop: 'eqpt_name' },
        { label: '框码', prop: 'container_code'},
        { label: '产品名称', prop: 'material_name'},      
        { label: '人员', prop: 'user_name'},
        { label: '创建时间', prop: 'create_time'},
        { label: '质检状态', prop: 'qc_status'},
        { label: '入库状态', prop: 'stock_status'},
      ],
      colConfigs2: [
        { label: '序号', prop: 'id' },
        { label: '设备名称', prop: 'eqpt_name' },
        { label: '框码', prop: 'container_code'},
        { label: '产品名称', prop: 'material_name'},      
        { label: '人员', prop: 'user_name'},
        { label: '创建时间', prop: 'create_time'},
        { label: '出库状态', prop: 'stock_status'},
      ],
    }
  },
  created(){
    this.getTableData();
    this.dataTimer = setInterval(()=>{
      this.getTableData()
    },20000);
  },
  methods: {
    getTableData(){
      api.getTableData1().then(res => {
        this.tableData1 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef1.switch(this.tableData1, {
              timer: 10000,
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