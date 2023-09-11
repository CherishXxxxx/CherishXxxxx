<template>
  <div style="width:100%;height:100%;">
    <span>{{ year }}&nbsp;&nbsp;</span><span>{{ time }}&nbsp;&nbsp;</span><span>{{ day }}</span>
  </div>
</template>

<script>
import fetch from '@/fetch/fetch.js';
export default {
  name: 'RunTime',
  data(){
    return {
      year: '',
      time: '',
      day: '',
      sTimer: null,
      getTimeTimer: null
    };
  },
  created() {
    this.getTime();
  },
  beforeDestroy(){
    if (this.getTimeTimer){
      clearTimeout(this.countdownTimmer);
    }
    if (this.sTimer){
      clearInterval(this.sTimer);
    }
  },
  methods: {
    getDay(d) {
      if (d === 1) {
        return '一';
      } else if (d === 2) {
        return '二';
      } else if (d === 3) {
        return '三';
      } else if (d === 4) {
        return '四';
      } else if (d === 5) {
        return '五';
      } else if (d === 6) {
        return '六';
      } else if (d === 0) {
        return '日';
      }
    },
    setCurTime(today){
      window.clearInterval(this.sTimer);
      var r = new Date().getTime();
      if (today){
        r = new Date(today).getTime();
      }
      this.sTimer = setInterval(() => {
        r = r + 1000;
        var now = new Date(r);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();// 获取天
        var day = now.getDay();// 获取星期

        if (month < 10){
          month = '0' + month;
        }
        if (date < 10){
          date = '0' + date;
        }
        var hour = now.getHours();// 获取时
        if (hour < 10){
          hour = '0' + hour;
        }
        var minute = now.getMinutes();// 获取分
        if (minute < 10){
          minute = '0' + minute;
        }
        var second = now.getSeconds();// 获取秒
        if (second < 10){
          second = '0' + second;
        }
        this.year = year + '-' + month + '-' + date;
        this.time = hour + ':' + minute + ':' + second;
        this.day = '星期' + this.getDay(day);
      }, 1000);
    },
    getTime() {
      window.clearTimeout(this.getTimeTimer);
      fetch('/action/test', 'get', { action: 'getTime' }).then(res => {
        this.setCurTime(res.headers.date);
        this.getTimeTimer = setTimeout(() => {
          this.getTime();
        }, 600000);
      }).catch(() => {
        this.setCurTime();
        this.getTimeTimer = setTimeout(() => {
          this.getTime();
        }, 600000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
