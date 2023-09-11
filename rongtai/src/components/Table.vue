<template>
  <el-table
    v-bind="$attrs"
    :data="tableData"
    style="width: 100%"
    v-on="$listeners"
  >
    <template v-for="(colConfig,index) in colConfigs">
      <slot v-if="colConfig.slot" :name="colConfig.slot" />
      <component
        :is="colConfig.component"
        v-else-if="colConfig.component"
        :key="index"
        :col-config="colConfig"
      />
      <el-table-column v-else :key="index" show-overflow-tooltip v-bind="colConfig" />
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    colConfigs: {
      type: Array,
      default(){
        return [
          { prop: 'date', label: '日期' },
          { prop: 'name', label: '姓名' },
          { prop: 'address', label: '地址' }
        ];
      }
    },
    tableData: {
      type: Array,
      default(){
        return [
          { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
          { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
          { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
        ];
      }
    }
  }
};
</script>
