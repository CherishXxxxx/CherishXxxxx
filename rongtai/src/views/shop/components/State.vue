<template>
  <ul class="state-ul">
      <li><span class="circle normal"></span>正常加工</li>
      <li><span class="circle idle"></span>开机空转</li>
      <li><span class="circle stop"></span>停机</li>
      <li><span class="circle fault"></span>故障</li>
  </ul>
</template>
<style lang="scss" scoped>
.state-ul{
  .normal{
    background:#32E378 !important;
  }
  .idle{
    background:#FFF23E !important;
  }
  .stop{
    background:#989CA9 !important;
  }
  .fault{
    background:#FF2121 !important;
  }
}
</style>