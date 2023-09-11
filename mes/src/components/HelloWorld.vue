<template>
  <div class="data-display" :style="boardStyle">
    <div class="data-board" :style="boardBackground">
      <div class="data-row" v-for="(item, index) in visibleData" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displayOrder: String // 通过属性传递显示顺序：'ascending' 或 'descending'
  },
  data() {
    return {
      data: [], // 数据
      currentIndex: 0, // 索引
      visibleData: [], // 当前显示的数据
      intervalId: null // 定时器
    };
  },
  computed: {
    boardStyle() {
      return {
        width: '80%',
        height: '40%',
        backgroundColor: 'lightblue'
      };
    },
    boardBackground() {
      return {
        background: 'linear-gradient(to bottom, #0000AA, #000066)'
      };
    }
  },
  mounted() {
    this.data = Array.from({ length: 30 }, (_, index) => `Data ${index + 1}`);
    this.visibleData = this.getNextData(); // 手动初始化
    this.startDataRotation();
  },
  methods: {
    startDataRotation() {
      this.intervalId = setInterval(() => {
        this.visibleData = this.getNextData();
      }, 3000);
    },
    //getNextData() {
      //const startIndex = this.currentIndex;
      //let endIndex = startIndex + 7;

     // if (endIndex > this.data.length) {
      //  endIndex = this.data.length;
     // }

      //this.currentIndex = endIndex % this.data.length;

      //if (endIndex > this.data.length) {
     //   return this.data.slice(startIndex).concat(this.data.slice(0, endIndex % this.data.length));
     // } else {
      //  return this.data.slice(startIndex, endIndex);
      //}
    //}
getNextData() {
  const startIndex = this.currentIndex;
  let endIndex = startIndex + 6;

  if (endIndex > this.data.length) {
    endIndex = this.data.length;
  }

  const newData = this.data.slice(startIndex, endIndex);

  // 补齐
  if (endIndex === this.data.length) {
    endIndex = 6 - newData.length;
    newData.push(...this.data.slice(0, endIndex));
  }

  this.currentIndex = endIndex % this.data.length;

  return newData;
}
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.data-display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.data-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  color: white;
  overflow: hidden;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.data-row {
  margin: 5px;
}
</style>
