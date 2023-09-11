<template>
  <div :class="status? [statusStyle,'monitor-content']:'monitor-content'">
    <h4 :title="title">{{ title }}</h4>
    <span class="monitor-label">{{ label }}：</span>
    <span class="monitor-value">{{value}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    status: String,
    label: String,
    value: String
  },
  data() {
    return {
      stateMap:{
        0:'停机',
        1:'自动',
        2:'手动',   
        3:'空转',
        4:'故障',
        7:'维护',
        8:'换模',
        9:'未知'
      }
    };
  },
  computed: {
    statusStyle() {
      if (this.status == '0') {
        return 'halt';
      } else if (this.status == '1') {
        return 'auto';
      } else if (this.status == '2') {
        return 'hand';
      } else if (this.status == '3') {
        return 'idling';
      } else if (this.status == '4') {
        return 'fault';
      } else if (this.status == '5') {
        return '';
      } else if (this.status == '6') {
        return '';
      } else if (this.status == '7') {
        return 'maintenance';
      } else if (this.status == '8') {
        return 'changeover';
      }else{
        return '';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.monitor-content {
  padding: 8px;
  height: 64px;
  // min-width: 200px;
  margin-bottom: 12px;
  border-radius: 4px;
  background-color: #2b3c44;
  background-image: url('~@/assets/images/panel-bg.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  cursor: pointer;
  color: #ffffff;
  box-sizing: border-box;
  h4 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
  &.fault {
    background-color: #ed5450;
  }
  &.halt {
    background-color: #c7c7c7;
  }
  &.auto {
    background-color: #7abb2a;
  }
  &.hand {
    background-color: #28a5f3;
  }
  &.idling {
    background-color: #cb70d7;
  }
  &.maintenance {
    background-color: #ffb301;
  }
  &.changeover {
    background-color: #6a9fc6;
  }
  .monitor-label {
    font-size: 12px;
  }
  .monitor-value {
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
