<template>

    <div class="shop-head">
        <div class="img">
          <img src="~@/assets/images/logo.png" alt="">
        </div>
        <div class="title">
          {{shopName}}
        </div>
        <div class="time">
          <!-- <Tmtime/> -->
        </div>
    </div>
</template>
<script>
// import Tmtime from '@/components/RunTime';
export default {
    // components:{Tmtime}
  props:{
    shopName:{
      type:String,
      default:''
    }
  },
  // metaInfo: {
  //       title: "viewport",
  //       meta: [
  //         { name: "width", content: "device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no,target-densitydpi=device-dpi" },
  //       ],
  //     },
}
</script>
