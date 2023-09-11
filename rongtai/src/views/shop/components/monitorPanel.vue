<template>
  <el-row :gutter="12" class="monitor-row">
    <el-col
      v-for="(item,index) in monitorData"
      :key="index"
      :xs="24"
      :sm="12"
      :md="8"
      :lg="3"
      :xl="3"
    >
      <tnMonitorItem :title="item[monitorMap['title']]" :label="monitorMap['label']" :value="item[monitorMap['value']]? item[monitorMap['value']]:'N/A'" :status="item[monitorMap['status']]"/>
    </el-col>
  </el-row>
</template>

<script>
import tnMonitorItem from './monitorItem';
export default {
  components: { tnMonitorItem },
  props: {
    monitorData: {
      type: Array,
      default() {
        return [];
      }
    },
    monitorMap: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      monitorItems: []
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.monitor-row {
  width: 100%;
  height: calc(100% - 30px);
  padding: 8px 6px;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
</style>
