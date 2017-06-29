<template>
  <div class="db-table">
    <!-- 顶部信息展示 -->
    <el-form :inline="true" :labelPosition="inputLabelPosition">
      <el-form-item :labelWidth="inputLabelWidth" label="数据库名称：">
        <el-input size="small" :readonly="true" v-model="dbName"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="inputLabelWidth" label="数据库类型：">
        <el-input size="small" :readonly="true" v-model="dbType"></el-input>
      </el-form-item>
    </el-form>
    <!-- 查询表单 -->
    <el-form :inline="true" :model="searchForm" class="search-from" :labelPosition="inputLabelPosition">
      <el-form-item :labelWidth="inputLabelWidth" label="表中文名">
        <el-input size="small" v-model="searchForm.name_cn" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item :labelWidth="inputLabelWidth" label="表英文名">
        <el-input size="small" v-model="searchForm.name_en" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="search" size="small" @click="doSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 新建、删除、执行 -->
    <el-row :span="24" class="btn-group">
      <el-button type="primary" size="small" icon="plus" @click="doCreate">新建</el-button>
      <el-button type="default" size="small" icon="close" @click="doDelete">删除</el-button>
      <el-button type="primary" size="small" icon="plus" @click="doExecute">执行</el-button>
    </el-row>
    <!-- 数据库表表 -->
    <el-table
      ref="multipleTable"
      :data="tables"
      border
      tooltip-effect="dark"
      class="table"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="tableNameCN"
        label="表中文名">
      </el-table-column>
      <el-table-column
        prop="tableNameEN"
        label="表英文名">
      </el-table-column>
      <el-table-column
        prop="execTime"
        label="执行时间">
      </el-table-column>
      <el-table-column
        prop="dbName"
        label="数据库名"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
        <template scope="scope">
          <el-button class="create-btn" type="text" size="small" icon="edit" @click="editItem(scope.$index, tables)">编辑</el-button>
          <el-button class="delete-btn" type="text" size="small" icon="delete" @click="deleteItem(scope.$index, tables)">删除</el-button>
          <el-button class="preview-btn" type="text" size="small" icon="view" @click="previewItem(scope.$index, tables)">预览</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="1000"
      class="pagination">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'DBTable',
    data () {
      return {
        dbName: '',
        dbType: '',
        searchForm: {
          name_cn: '',
          name_en: ''
        },
        inputLabelWidth: '7em',
        inputLabelPosition: 'left',
        tables: [],
        currentPage: 1
      }
    },
    methods: {
      // 搜索
      doSearch () {
        console.log('do search...')
      },
      // 功能按钮
      doCreate () {

      },
      doDelete () {

      },
      doExecute () {

      },
      // 表格相关
      handleSelectionChange () {

      },
      editItem (index, rows) {

      },
      deleteItem (index, rows) {

      },
      previewItem (index, rows) {

      },
      // 分页
      handleSizeChange (val) {
        console.log(val)
      },
      handleCurrentChange (val) {
        console.log('handleCurrentChange: ' + val)
        // TODO: 翻页
      },
      // 数据获取
      getTableData () {
        this.tables = [
          {
            id: 1,
            tableNameCN: '订单主表',
            tableNameEN: 'ORDER_M',
            execTime: '2017-06-29 10:17:34',
            dbName: '数据库名'
          },
          {
            id: 1,
            tableNameCN: '订单主表',
            tableNameEN: 'ORDER_M',
            execTime: '2017-06-29 10:17:34',
            dbName: '数据库名'
          },
          {
            id: 1,
            tableNameCN: '订单主表',
            tableNameEN: 'ORDER_M',
            execTime: '2017-06-29 10:17:34',
            dbName: '数据库名'
          },
          {
            id: 1,
            tableNameCN: '订单主表',
            tableNameEN: 'ORDER_M',
            execTime: '2017-06-29 10:17:34',
            dbName: '数据库名'
          },
          {
            id: 1,
            tableNameCN: '订单主表',
            tableNameEN: 'ORDER_M',
            execTime: '2017-06-29 10:17:34',
            dbName: '数据库名'
          }
        ]
      }
    },
    mounted () {
      this.getTableData()
    }
  }
</script>
<style lang="less" scoped>

  @import "../../assets/base";

  .db-table {
    text-align: left;
    .search-from {
    }
    .btn-group {
      margin-bottom: 16px;
    }
    .table {
      .delete-btn {
        color: @color-negative;
      }
      .delete-btn:active {
        color: @color-negative-active;
      }
      .preview-btn {
        color: @color-positive;
      }
      .preview-btn:active {
        color: @color-positive-active
      }
    }
    .pagination {
      float: right;
      margin-top: 20px;
      padding-right: 0;
    }
  }
</style>
