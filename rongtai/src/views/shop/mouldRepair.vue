<template>
  <div class="main-container">
    <!--车间抬头-->
    <tnHeader :shopName="shopCurName"/>
    <div class="shop-content content-container">
        <div class="border table-main">
          <span class="title">模修单信息</span>
          <tnTable ref="tnListRef1" :colConfigs="colConfigs1" :rowStyle="rowStyle" />
        </div>
        <div class="border table-main">
          <span class="title">质检信息</span>
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
      shopCurName:'模修看板',
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
        { label: '模具名称', prop: 'model_mould_name' },
        { label: '模具条码', prop: 'model_mould_code' },
        { label: '创建时间', prop: 'create_times'},      
        { label: '状态', prop: 'state'},
      ],
      colConfigs2: [
        { label: '设备', prop: 'eqpt_name' },
        { label: '条码', prop: 'lot_no' },
        { label: '创建时间', prop: 'create_time'},   
        { label: '状态', prop: 'status_show'},
        { label: '质检结果', prop: 'result_show'},
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
      api.get_mould_qc_record().then(res => {
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
      api.get_mould_qc_record().then(res => {
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