<template>
  <div>
    <span>{{nowTimes}}</span><span style="margin-left:32px;">{{nowWeekDay}}</span>
  </div>
</template>
<script>
export default {
    data(){
        return{
            nowTimes:'',
            nowWeekDay:'',
            timmer:null
        }
    },
    mounted(){
        if(this.timmer){
          this.clearTimmer();
        }
        this.timmer = setInterval( ()=>{
            this.setNowTimes();
        },1000)
    },
    methods:{
        padaDate(value){
          return value<10 ? '0'+value : value;
        },
        getWeekDay(value){
          var a = new Array("日", "一", "二", "三", "四", "五", "六"); 
          return "星期"+a[value];
        },
        setNowTimes(){
            //创建一个时间日期对象
            var date = new Date();
            var year = date.getFullYear();      //存储年
            var month = this.padaDate(date.getMonth()+1);    //存储月份
            var day = this.padaDate(date.getDate());         //存储日期
            var hours = this.padaDate(date.getHours());      //存储时
            var minutes = this.padaDate(date.getMinutes());  //存储分
            var seconds = this.padaDate(date.getSeconds());  //存储秒
            //返回格式化后的日期
            //return year+'年'+month+'月'+day+'日'+hours+'时'+minutes+'分'+seconds+'秒';
            this.nowTimes =  year+'-'+month+'-'+day+ ' '+ hours+':'+minutes+':'+seconds;
            this.nowWeekDay = this.getWeekDay(date.getDay());
        },
        clearTimmer(){
            clearInterval(this.timmer);
        }
    }
}
</script>