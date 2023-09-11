<template>
  <el-table-column :label="colConfig.label">
    <template slot-scope="{ row }">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="row.progress" />
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    colConfig: Object
  }
};
</script>
