<template>
  <div class="container_wrap">
      <div v-for="(item,index) in helpData" :key="index" :style="{height:colPercent+'%',width:rowPercent+'%'}">
            <div class="block_wrap">
                <div class="block_title">
                    {{item.bin_names}}
                </div>
                <div class="content" :class="item.iskit==1?'green':'red'">
                    <ul v-if="item.iskit==1">
                       <li><span>状态：</span><span>占用</span></li>
                       <li><span>信息1：</span><span>{{item.batch_no}}+{{item.material_name}}</span></li>
                       <li><span>{{item.batch_no}}+{{item.material_name}}</span></li> 
                       <li><span>信息2：</span><span>{{item.batch_no}}+{{item.material_name}}</span></li>
                       <li><span>{{item.batch_no}}+{{item.material_name}}</span></li>
                    </ul>
                    <ul v-else>
                        <li style="position:absolute;transform:translate(-50%,-50%);left:50%;top:50%"><span>状态：</span><span style="color:#FF2626">空闲</span></li>
                    </ul>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        colPercent:{
            type:Number,
            default:50
        },
        rowPercent:{
            type:Number,
            default:33
        },
        helpData:{
            type:Array,
            default:()=>[{iskit:1},'','','','','']
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.container_wrap{
    display: flex;
    width:100%;
    height:100%;
    // justify-content: space-between;
    box-sizing: content-box;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
}
.block_wrap{
   width:100%;
   height:100%;
   box-sizing: border-box;
   padding:10px
}
.block_title{
    width:100%;
    height:50px;
    line-height:50px;
    font-size:24px;
    background:linear-gradient(180deg,rgba(0,106,255,1) 0%,rgba(0,70,168,0.8) 60%,rgba(3,83,192,0.67) 100%);
    opacity:0.8;
}
.content{
    height: calc(100% - 50px);
    position: relative;
    ul{
        padding: 20px;
        text-align: left;
        // position: relative;
        li{
            height: 32px;
            line-height: 32px;
            font-size:20px;
        }
    }
}
    .green{
        background:rgba(23,89,49,0.6);
        border:2px solid rgba(0,208,44,1);
    }
    .red{
        background:rgba(5,40,99,0.6);
        border:2px solid rgba(0,120,255,1);
    }
</style>