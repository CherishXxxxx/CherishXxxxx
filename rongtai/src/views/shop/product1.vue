<template>
  <div class="main-container">
    <!--车间抬头-->
    <tnHeader :shopName="shopCurName"/>
    <div class="shop-content content-container">
        <div class="border table-main">
          <span class="title">成品入库申请</span>
          <tnTable ref="tnListRef1" :colConfigs="colConfigs1" :rowStyle="rowStyle" />
        </div>
        <div class="border table-main">
          <span class="title">24小时内出入库信息</span>
          <tnTable ref="tnListRef2" :colConfigs="colConfigs2" :rowStyle="rowStyle" />
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
      shopCurName:'成品仓库看板',
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
        { label: '入库单号', prop: 'mt_get_no',width:350 },
        { label: '产品名称', prop: 'material_name'},      
        { label: '数量', prop: 'qty'},
        { label: '人员', prop: 'create_by_name'},
        { label: '创建时间', prop: 'create_time'},
        { label: '入库状态', prop: 'status'},
      ],
       colConfigs2: [
        { label: '产品名称', prop: 'material_name' },
        { label: '入库数量', prop: 'inQty' },
        { label: '出库数量', prop: 'outQty'},      
        { label: '当前库存', prop: 'nowQty'},      
      ]
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
      api.get_end_material_stock_in_apply_info().then(res => {
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
      api.stock_info().then(res => {
        this.tableData2 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef2.switch(this.tableData2, {
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