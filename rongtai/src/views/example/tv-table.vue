<template>
  <TVTable ref="SwitchRef" show-index :col-configs="colConfigs" />
</template>

<script>
import TVTable from '@/components/TVTable';

export default {
  components: { TVTable },
  data(){
    return {
      colConfigs: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      tableData: [
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-08', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-09', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-12', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-22', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-31', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }
      ]
    };
  },
  mounted() {
    this.starSwitch();
  },
  methods: {
    starSwitch(){
      this.$nextTick(() => {
        this.$refs.SwitchRef.switch(this.tableData, {
          timer: 3000,
          pageSize: 5
        });
      });
    }

  }
};
</script>

<style scoped>

</style>
