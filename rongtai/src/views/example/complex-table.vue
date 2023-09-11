<template>
  <section>
    <TnTable :col-configs="colConfigs" :table-data="list">
      <el-table-column slot="options" label="操作">
        <template slot-scope="{ row }">
          <el-button size="mini" @click="handleEdit(row)">
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </TnTable>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </section>
</template>

<script>
import TnTable from '@/components/Table';
import Progress from '@/components/Progress';
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
        { prop: 'progress', label: '进度', component: Progress },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' },
        { slot: 'options' }
      ],
      tableData: [
        { date: '2016-05-02', progress: 12, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 1, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 2, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 72, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 52, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 32, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 22, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 92, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', progress: 82, name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-02', progress: 1, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 2, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 72, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 52, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 32, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 22, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 92, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-02', progress: 1, name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleEdit(){
      console.log('handleEdit', arguments);
    },
    handleDelete(){
      console.log('handleDelete', arguments);
    },
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
