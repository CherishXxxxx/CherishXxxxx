<template>
  <el-table
    v-bind="$attrs"
    :data="data"
    style="width: 100%"
    tooltip-effect="dark"
    v-on="$listeners"
  >
    <el-table-column
      v-if="showIndex"
      width="50"
      label="序号"
      type="index"
    />
    <template v-for="(colConfig,index) in colConfigs">
      <slot v-if="colConfig.slot" :name="colConfig.slot" />
      <component
        :is="colConfig.component"
        v-else-if="colConfig.component"
        :key="index"
        :col-config="colConfig" 
      />
      <el-table-column v-else :key="index" show-overflow-tooltip v-bind="colConfig" >
        <!-- <el-table-column v-for="(childConfig,index) in colConfig.children" :key="index" v-if="!colConfig.children" v-bind="colConfig.children[index]"/> -->
        <template v-for="(childConfig,index) in colConfig.children" v-if="colConfig.children">
          <slot v-if="childConfig.slot" :name="childConfig.slot" />
          <component
            :is="childConfig.component"
            v-else-if="childConfig.component"
            :key="index"
            :col-config="childConfig" 
          />
          <el-table-column :key="index" show-overflow-tooltip v-bind="childConfig" v-else>
          </el-table-column>
         </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>


export default {
  props: {
    showIndex: Boolean,
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
        ];
      }
    },
    rowStyle: {
      type: Object,
      default: () => {
        return {
          height: '44px',
          fontSize: '12px !important',
          lineHeight: '44px',
          padding: 0,
          borderBottom: '1px solid rgb(20,53,132)'
        };
      }
    }
  },
  data(){
    return {
      data: this.tableData,
      switchIndex: 0,
      timer: null
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    switch(data, { timer, pageSize }){
      if (this.timer)clearInterval(this.timer);
      const len = data.length;
      this.data = data.slice(0, pageSize);
      this.timer = setInterval(() => {
        this.data = this.sliceData(data, pageSize, len);
      }, timer);
    },
    // 切割分页数据
    sliceData(data = [], pageSize = 0, len = 0) {
      if (len > pageSize) {
        const total = Math.ceil(len / pageSize);
        this.switchIndex++;
        if (this.switchIndex > total - 1) {
          this.switchIndex = 0;
        }
        return data.slice(this.switchIndex * pageSize, (this.switchIndex + 1) * pageSize);
      }
      return data;
    }
  }
};
</script>
