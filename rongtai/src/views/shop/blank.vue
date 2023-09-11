<template>
  <div class="main-container">
    <!--车间抬头-->
    <tnHeader :shopName="shopCurName"/>
    <div class="shop-content content-container">
        <div class="border table-main">
          <span class="title">毛坯入库申请</span>
          <tnTable ref="tnListRef1" :colConfigs="colConfigs1" :rowStyle="rowStyle" :row-class-name="tableRowClassName"/>
        </div>
        <div class="border table-container">
          <span class="title">毛坯出库申请</span>
          <tnTable ref="tnListRef2" :colConfigs="colConfigs2" :rowStyle="rowStyle" />
        </div>
        <div class="border table-mini">
          <span class="title">24小时内出入库信息</span>
          <tnTable ref="tnListRef3" :colConfigs="colConfigs3" :rowStyle="rowStyle" />
        </div>
    </div>
  </div>
</template>
<script>
import tnTable from '@/components/TVTable'
import tnHeader from './components/TnHeader'
import { Partten } from "@/partten"

import api from '@/fetch/dataApi';
export default {
  components:{tnTable,tnHeader},
  data () {
    return {
      shopCurName:'毛坯仓库看板',
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
        { label: '入库单号', prop: 'mt_get_no',width:250},
        { label: '框码', prop: 'lot_no'},
        { label: '产品名称', prop: 'material_name'},   
        { label: '数量', prop: 'qty'},   
        { label: '人员', prop: 'create_by_name'},
        { label: '创建时间', prop: 'create_time'},
        { label: '质检状态', prop: 'qcStatus'},
        { label: '入库状态', prop: 'status'},
      ],
      colConfigs2: [
        { label: '出库单号', prop: 'mt_get_no',width:250},
        { label: '产品名称', prop: 'material_name'},     
        { label: '数量', prop: 'qty',width:90},   
        { label: '人员', prop: 'create_by_name',width:100},
        { label: '创建时间', prop: 'create_time'},
        { label: '出库状态', prop: 'status',width:105},
      ],
       colConfigs3: [
        { label: '产品名称', prop: 'material_name', },
        { label: '入库数量', prop: 'inQty',width:105 },
        { label: '出库数量', prop: 'outQty',width:105},      
        { label: '当前库存', prop: 'nowQty',width:105},      
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
      api.get_semi_material_stock_in_apply_info().then(res => {
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
      api.get_semi_material_stock_out_apply_info().then(res => {
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
      api.B_stock_info().then(res => {
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
    },
    tableRowClassName({ row, rowIndex }) {
               return Partten.qcStatus[row.status];
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
    width: 60%; 
    padding: 10px;
    margin-top: 10px;
  }
  .table-main{
    width: 99%; 
    padding: 10px;
    margin-top: 10px;
  }
  .table-mini{
    width: 37.2%; 
    padding: 10px;
    margin-top: 10px;
  }
}
</style>