<template>
  <div class="main-container">
    <!--车间抬头-->
    <tnHeader :shopName="shopCurName"/>
    <div class="shop-content content-container">
        <div class="border table-container">
          <span class="title">原材料报检信息</span>
          <tnTable ref="tnListRef1" :colConfigs="colConfigs1" :rowStyle="rowStyle" :tableData="tableData1" />
        </div>
        <div class="border table-container">
          <span class="title">原材料送检/状态</span>
          <tnTable ref="tnListRef2" :colConfigs="colConfigs2" :rowStyle="rowStyle"
          :tableData="tableData2" />
        </div>
        <div class="border table-container" style="">
          <span class="title">熔炼炉铝液送检</span>
          <tnTable ref="tnListRef3" :colConfigs="colConfigs3" :rowStyle="rowStyle"
          :tableData="tableData3" />
        </div>
        <div class="border table-container">
          <span class="title">除气后送检/状态</span>
          <tnTable ref="tnListRef4" :colConfigs="colConfigs4" :rowStyle="rowStyle"
          :tableData="tableData4" />
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
      shopCurName:'光谱室看板',
      dataTimer: null,
      lineTimmer: null,
      lineNum: 5,
      rowStyle: {
          height: '50px',
          fontSize: '50px !important',
          lineHeight: '50px',
          padding: 0,
      },
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      colConfigs1: [
        //{ label: '序号', prop: 'id' ,width:'80'},
        { label: '订单号', prop: 'purchaseOrderNo' },
        { label: '到货时间', prop: 'deliveryTime'},
        { label: '报检时间', prop: 'create_time',width:400},
        { label: '状态', prop: 'status',width:270},
      ],
      colConfigs2: [
        //{ label: '序号', prop: 'id',width:'60' },
        { label: '条码', prop: 'lot_no' },
        { label: '样品号', prop: 'sample_id'},
        { label: '送检时间', prop: 'create_time',width:400},      
        { label: '结果', prop: 'status',width:270},
      ],
      colConfigs3: [
        //{ label: '序号', prop: 'id',width:'60' },
        { label: '设备', prop: 'eqpt' },
        // { label: '中转包号', prop: 'lot_no' },
        { label: '样品号', prop: 'sample_id' },
        { label: '送检时间', prop: 'create_time',width:400},      
        { label: '结果', prop: 'status',width:270},
      ],
      colConfigs4: [
        //{ label: '序号', prop: 'id',width:'60' },
        // { label: '设备', prop: 'eqpt' },
        { label: '中转包号', prop: 'lot_no' },
        { label: '样品号', prop: 'sample_id' },
        { label: '送检时间', prop: 'create_time',width:400},      
        { label: '结果', prop: 'status',width:270},
      ]
    }
  },
  created(){
    // this.getTableData();
    this.dataTimer = setInterval(()=>{
      this.getTableData()
    },20000);
  },
  methods: {
    getTableData(){
      api.get_source_material_application_info().then(res => {
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
      api.get_source_material_qc_record().then(res => {
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
      api.get_smelt_qc_record().then(res => {
        this.tableData3 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef3.switch(this.tableData3, {
              timer: 10000,
              pageSize: this.lineNum
            });   
        });
      }).catch((err) => {
        console.log(err)
      });
      api.get_degassing_qc_record().then(res => {
        this.tableData4 = res.help && res.help.length>0? res.help : [];
        this.$nextTick(() => {
            this.$refs.tnListRef4.switch(this.tableData4, {
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
  .table-container{
    width: 48.6%; 
    padding: 10px;
    margin-top: 10px;
  }
}
</style>