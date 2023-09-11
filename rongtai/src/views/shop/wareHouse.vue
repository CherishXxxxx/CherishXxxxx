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
          <tnTable ref="tnListRef2" :colConfigs="colConfigs2" :rowStyle="rowStyle" :row-class-name="tableRowClassName"/>
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
import { Partten } from "@/partten"

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
          // fontSize: '80px !important',
          fontSize: '50px',
          lineHeight: '50px',
          padding: 0,
      },
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      colConfigs1: [
        //{ label: '序号', prop: 'id' ,width:'80'},
        { label: '订单号', prop: 'purchaseOrderNo',width:120 },
        { label: '到货时间', prop: 'deliveryTime'},
        { label: '报检时间', prop: 'create_time',width:100},      
        { label: '状态', prop: 'status',width:50},
      ],
      colConfigs2: [
        //{ label: '序号', prop: 'id',width:'60' },
        { label: '条码', prop: 'lot_no' },
        { label: '样品号', prop: 'sample_id'},
        { label: '送检时间', prop: 'create_time',width:150},      
        { label: '结果', prop: 'status',width:50},
      ],
      colConfigs3: [
        { label: '领料单号', prop: 'mt_get_no',width:325},
        { label: '产品名称', prop: 'material_name'},
        { label: '数量', prop: 'qty'},
        { label: '人员', prop: 'create_by_name'},      
        { label: '领料时间', prop: 'create_time'},
        { label: '状态', prop: 'status',width:50},
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
      api.WH_get_source_material_application_info().then(res => {
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
      api.WH_get_source_material_qc_record().then(res => {
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
      api.get_source_matrial_stock_out_apply().then(res => {
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
    }  ,
    tableRowClassName({ row, rowIndex }) {
               return Partten.qcStatus[row.status];
            } 
  },
  beforeDestroy () {
    if(this.dataTimer){
      clearInterval(this.dataTimer)
    }
  },
  // metaInfo: {
  //   meta: [
  //     { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi" },
  //   ],
  // },
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
    .has-gutter {
      display: flex!important;
    }
  }
  .table-main{
    width: 100%; 
    padding: 10px;
    margin-top: 10px;
  }
}
</style>