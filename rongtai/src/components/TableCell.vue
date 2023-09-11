<template>
  <el-table-column v-bind="colConfig">
    <template slot-scope="{ row }">
      <div v-if="colConfig.cellData">
        <div v-for="(item,index) in colConfig.cellData" :key="index">
            <span :style="{'color':item.color}" v-if="item.status==row[colConfig.prop]">{{item.text}}</span>
        </div>
      </div>
      <span :style="{'color':colConfig.color}" v-else>{{row[colConfig.prop]}}</span>
    </template>
  </el-table-column>
</template>

<script>
export default {
  props: {
    colConfig: Object
  }
 
};
</script>
