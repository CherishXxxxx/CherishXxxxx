<template>
  <el-table-column :label="colConfig.label">
    <template slot-scope="{ row }">
      <div class="progress-out" :style="{'background-color':progressOutColor}">
          <div :style="{width:row[colConfig.prop] && parseInt(row[colConfig.prop])>=100?100+'%':row[colConfig.prop]+'%','background-color':progressInColor}" class="progress-in">
            <span>{{row[colConfig.prop]+'%'}}</span>
          </div>
      </div>     
    </template>
  </el-table-column>
</template>

<script>
 export default {
  props: {
    colConfig: Object,
    progressOutColor: {
      type: String,
      default: '#102D62'
    },
    progressInColor:{
      type: String,
      default: '#10A34A'        
    }
    
  },
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scoped>
    .progress-out {
        width: 100%;
        height: 28px;
        position: relative;
        overflow: hidden;
        .progress-in {
            height: 100%;
            position: relative;
            span{
              position:absolute;
              top: 50%;
              left: 50%;
              white-space: nowrap;
              // width: 100%;
              transform: translate(-50%,-50%);
            }
        }
    }   
 
</style>

