<template>
  <section>
    <TnTable :col-configs="colConfigs" :table-data="list" />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </section>
</template>

<script>
import TnTable from '@/components/Table';
import Pagination from '@/components/Pagination';
export default {
  components: { TnTable, Pagination },
  data(){
    return {
      list: null,
      total: 0,
      listQuery: {
        page: 1,
        limit: 5
      },
      colConfigs: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      tableData: [
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-05', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-14', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-08', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-09', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-12', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-22', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList(){
      this.total = this.tableData.length;
      const start = (this.listQuery.page - 1) * this.listQuery.limit;
      const end = this.listQuery.page * this.listQuery.limit;
      this.list = this.tableData.slice(start, end);
    }
  }
};
</script>

<style scoped>

</style>
