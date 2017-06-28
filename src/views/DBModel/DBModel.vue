<template>
  <div class="db-model">
    <!-- 查询表单 -->
    <el-form :inline="true" :model="searchForm" class="searchForm">
      <el-form-item label="连接名称">
        <el-input v-model="searchForm.connectName" size="small" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="主机名/IP">
        <el-input v-model="searchForm.host" size="small" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="数据库类型">
        <el-select v-model="searchForm.dbType" size="small" placeholder="请选择">
          <el-option label="MySQL" value="MySQL"></el-option>
          <el-option label="SQL Server" value="SQL Server"></el-option>
          <el-option label="Oracle" value="Oracle"></el-option>
          <el-option label="PostgreSQL" value="PostgreSQL"></el-option>
          <el-option label="MariaDB" value="MariaDB"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="search" size="small" @click="doSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 新建、删除 -->
    <el-row :span="24" class="btn-group">
      <el-button type="primary" size="small" icon="plus" @click="doCreate">新建</el-button>
      <el-button type="default" size="small" icon="close" @click="doDelete">删除</el-button>
    </el-row>
    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="databases"
      border
      tooltip-effect="dark"
      class="table"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="dbName"
        label="连接名称">
      </el-table-column>
      <el-table-column
        prop="dbType"
        label="数据库类型">
      </el-table-column>
      <el-table-column
        prop="dbHost"
        label="主机名/IP">
        <template scope="scope">
          <el-tag type="primary">{{scope.row.dbHost}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="dbPort"
        label="端口"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template scope="scope">
          <el-button class="create-btn" type="text" size="small" icon="edit" @click="editItem(scope.$index, databases)">编辑</el-button>
          <el-button class="delete-btn" type="text" size="small" icon="delete" @click="deleteItem(scope.$index, databases)">删除</el-button>
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

    <!-- 新建数据库连接 -->
    <el-dialog title="新建关联库" :visible.sync="newDatabaseFormVisible" class="db-dialog" size="tiny">
      <el-form ref="DBForm" :model="DBForm" :rules="DBFormRule">
        <el-form-item label="连接名称" :label-width="formLabelWidth" prop="dbName">
          <el-input size="small" v-model="DBForm.dbName" autoComplete="off" placeholder="绿科投后管理系统_测试库"></el-input>
        </el-form-item>
        <el-form-item label="数据库类型" :label-width="formLabelWidth" prop="dbType">
          <el-select size="small" v-model="DBForm.dbType" placeholder="请选择类型">
            <el-option label="MySQL" value="MySQL"></el-option>
            <el-option label="SQL Server" value="SQL Server"></el-option>
            <el-option label="Oracle" value="Oracle"></el-option>
            <el-option label="PostgreSQL" value="PostgreSQL"></el-option>
            <el-option label="MariaDB" value="MariaDB"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主机名/IP" :label-width="formLabelWidth" prop="dbHost">
          <el-input size="small" v-model="DBForm.dbHost" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="端口" :label-width="formLabelWidth" prop="dbPort">
          <el-input size="small" v-model="DBForm.dbPort" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input size="small" v-model="DBForm.username" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input size="small" v-model="DBForm.password" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="字符集" :label-width="formLabelWidth" prop="charset">
          <el-input size="small" v-model="DBForm.charset" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" icon="circle-check" @click="saveDBForm('DBForm')">保 存</el-button>
        <el-button size="small" icon="circle-close" @click="newDatabaseFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'DBModel',
    data () {
      return {
        searchForm: {
          connectName: '',
          host: '',
          dbType: ''
        },
        databases: [
          {
            dbName: '绿科投后生产库-001',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            dbName: '绿科投后生产库-002',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            dbName: '绿科投后生产库-003',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            dbName: '绿科投后生产库-004',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            dbName: '绿科投后生产库-005',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          }
        ],
        databasesSelectRows: [],
        currentPage: 1,
        formLabelWidth: '100px',
        newDatabaseFormVisible: false,
        DBForm: {
          DBName: '',
          DBType: '',
          DBHost: '',
          DBPort: '',
          username: '',
          password: '',
          charset: ''
        },
        DBFormRule: {
          dbName: [
            {
              required: true,
              message: '请输入连接名称',
              trigger: 'blur'
            }
          ],
          dbType: [
            {
              required: true,
              message: '请选择数据库类型',
              trigger: 'blur'
            }
          ],
          dbHost: [
            {
              required: true,
              message: '请输入主机地址或IP',
              trigger: 'blur'
            }
          ],
          dbPort: [
            {
              required: true,
              message: '请输入端口号',
              trigger: 'blur'
            }
          ],
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: false,
              message: '请输入密码',
              trigger: 'blur'
            }
          ],
          charset: [
            {
              required: true,
              message: '请输入字符集',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      // 表格查询
      doSearch () {
        console.log(JSON.stringify(this.searchForm))
      },
      // 表格外 新建、删除
      doCreate () {
        this.clearDBFrom()
        this.newDatabaseFormVisible = true
      },
      doDelete () {
        if (this.databasesSelectRows.length > 0) {
          console.log('delete ...')
          return 0
        }
        console.log('nothing to delete ...')
      },
      // 表格内编辑、删除、表格选中事件
      editItem (index, rows) {
        this.DBForm = rows[index]
        this.newDatabaseFormVisible = true
      },
      deleteItem (index, rows) {
        rows.splice(index, 1)
      },
      handleSelectionChange (val) {
        this.databasesSelectRows = val
      },
      // 翻页
      handleSizeChange () {

      },
      handleCurrentChange () {

      },
      // 新建或编辑 对话框保存
      saveDBForm (DBForm) {
        let that = this
        that.$refs[DBForm].validate((valid) => {
          if (valid) {
            console.log(JSON.stringify(that.DBForm))
          }
          console.log(that.$refs)
        })
      },
      clearDBFrom () {
        this.DBForm = {}
      }
    }
  }
</script>
<style lang="less" scoped="">

  @import "../../assets/base";

  .db-model {
    .btn-group {
      margin-bottom: 16px;
    }
    .table {
      .delete-btn {
        color: @color-negative;
      }
      .delete-btn:active {
        color: @color-negative - 66;
      }
    }
    .pagination {
      float: right;
      margin-top: 20px;
      padding-right: 0;
    }
    .db-dialog {
      .el-select {
        width: 100%;
      }
    }
  }
</style>
