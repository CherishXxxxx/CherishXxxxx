<template>
  <ul class="legend-ul">
    <li>
      <span class="legend-span fault" />
      <span class="legend-name">故障</span>
    </li>
    <li>
      <span class="legend-span halt" />
      <span class="legend-name">停机</span>
    </li>
    <li>
      <span class="legend-span auto" />
      <span class="legend-name">自动</span>
    </li>
    <li>
      <span class="legend-span hand" />
      <span class="legend-name">手动</span>
    </li>
    <li>
      <span class="legend-span idling" />
      <span class="legend-name">空转</span>
    </li>
    <li>
      <span class="legend-span maintenance" />
      <span class="legend-name">维护</span>
    </li>
    <li>
      <span class="legend-span changeover" />
      <span class="legend-name">换模</span>
    </li>
    <li class="default">
      <span class="legend-span" />
      <span class="legend-name">未知</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'DeviceLegend'
};
</script>

<style scoped lang="scss">
.legend-ul {
  height: 30px;
  list-style-type: none;
  margin: 0 auto;
  padding-right:12px;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  li {
    height: 100%;
    float: right;
    width: 64px;
    .legend-span {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      position: relative;
      background: #2b3c44;
      top: 4px;
      &.fault {
        background: #ed5450;
      }
      &.halt {
        background: #c7c7c7;
      }
      &.auto {
        background: #7abb2a;
      }
      &.hand {
        background: #28a5f3;
      }
      &.idling {
        background: #cb70d7;
      }
      &.maintenance {
        background: #ffb301;
      }
      &.changeover {
        background: #6a9fc6;
      }
    }
    .legend-name {
      font-size: 12px;
      display: inline-block;
      position: relative;
      padding: 0 8px 0 2px;
    }
  }
}
</style>

