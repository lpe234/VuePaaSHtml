<template>
  <div class="db-model">
    <!-- 查询表单 -->
    <el-form :inline="true" :model="searchForm" class="searchForm">
      <el-form-item label="连接名称">
        <el-input v-model="searchForm.dbName" size="small" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="主机名/IP">
        <el-input v-model="searchForm.dbHost" size="small" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="数据库类型">
        <el-select v-model="searchForm.dbType" size="small" placeholder="请选择">
          <el-option label="MySQL" value="MySQL"></el-option>
          <el-option label="SQL Server" value="SQL Server"></el-option>
          <el-option label="Oracle" value="Oracle"></el-option>
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
        <template scope="scope">
          <el-button class="edit-dbname" type="text" @click="editDBItem(scope.$index, databases)" v-text="scope.row.dbName">
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="dbType"
        label="数据库类型">
      </el-table-column>
      <el-table-column
        prop="dbHost"
        label="主机名/IP">
        <template scope="scope">
          <el-tag type="primary" :close-transition="true">{{scope.row.dbHost}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="dbPort"
        label="端口"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作"
        width="160">
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
    <el-dialog :title="newDatabaseFormTitle" :visible.sync="newDatabaseFormVisible" class="db-dialog" size="tiny">
      <el-form ref="DBForm" :model="DBForm" :rules="DBFormRule" :label-position="newDatabaseFormLabelPosition">
        <el-form-item label="连接名称" :label-width="formLabelWidth" prop="dbName">
          <el-input size="small" v-model="DBForm.dbName" autoComplete="off" placeholder="绿科投后管理系统_测试库"></el-input>
        </el-form-item>
        <el-form-item v-if="newDatabaseFormTitleCreate" label="数据库类型" :label-width="formLabelWidth" prop="dbType">
          <el-select size="small" v-model="DBForm.dbType" placeholder="请选择类型">
            <el-option label="MySQL" value="MySQL"></el-option>
            <el-option label="SQL Server" value="SQL Server"></el-option>
            <el-option label="Oracle" value="Oracle"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主机名/IP" :label-width="formLabelWidth" prop="dbHost">
          <el-input size="small" v-model="DBForm.dbHost" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="端口" :label-width="formLabelWidth" prop="dbPort">
          <el-input size="small" v-model="DBForm.dbPort" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item v-if="DBForm.dbType==='SQL Server'" label="初始化数据库" :label-width="formLabelWidth" prop="dbDefault">
          <el-input size="small" v-model="DBForm.dbDefault" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item v-if="DBForm.dbType==='SQL Server'" label="授权类型" :label-width="formLabelWidth" prop="dbAuthType">
          <el-input size="small" v-model="DBForm.dbAuthType" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item v-if="DBForm.dbType==='Oracle'" label="授权类型" :label-width="formLabelWidth" prop="dbOracleAuthType">
          <el-select size="small" v-model="DBForm.dbOracleAuthType" placeholder="请选择类型">
            <el-option label="Basic" value="Basic"></el-option>
            <el-option label="TNS" value="TNS"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="DBForm.dbType==='Oracle'" label="服务名/SID" :label-width="formLabelWidth" prop="dbSID">
          <el-input size="small" v-model="DBForm.dbSID" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input size="small" v-model="DBForm.username" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input size="small" v-model="DBForm.password" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item v-if="DBForm.dbType==='MySQL'" label="字符集" :label-width="formLabelWidth" prop="charset">
          <el-input size="small" v-model="DBForm.charset" autoComplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="test-connection-btn" size="small" type="primary" icon="arrow-right" @click="testConnection">测试连接</el-button>
        <el-button size="small" type="primary" icon="circle-check" @click="saveDBForm('DBForm')">保 存</el-button>
        <el-button size="small" icon="circle-close" @click="newDatabaseFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'

  const DBForm = {
    dbName: '',
    dbType: 'MySQL',
    dbHost: '',
    dbPort: '3306',
    dbDefault: '',
    dbAuthType: '',
    dbOracleAuthType: '',
    dbSID: '',
    username: 'root',
    password: '',
    charset: 'utf8'
  }

  export default {
    components: {ElButton},
    name: 'DBModel',
    data () {
      return {
        searchForm: {
          dbName: '',
          dbHost: '',
          dbType: 'MySQL'
        },
        databases: [
          {
            id: 1,
            dbName: '绿科投后生产库-001',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            id: 2,
            dbName: '绿科投后生产库-002',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            id: 3,
            dbName: '绿科投后生产库-003',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            id: 4,
            dbName: '绿科投后生产库-004',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            id: 5,
            dbName: '绿科投后生产库-005',
            dbType: 'MySQL',
            dbHost: '192.168.1.1',
            dbPort: '3306'
          },
          {
            id: 6,
            dbName: '绿科投后生产库-005',
            dbType: 'SQL Server',
            dbHost: '192.168.1.1',
            dbPort: '1443'
          },
          {
            id: 7,
            dbName: '绿科投后生产库-005',
            dbType: 'Oracle',
            dbOracleAuthType: 'Basic',
            dbHost: '192.168.1.1',
            dbPort: '1521'
          }
        ],
        databasesSelectRows: [],
        currentPage: 1,
        formLabelWidth: '100px',
        newDatabaseFormVisible: false,
        newDatabaseFormTitleCreate: true,
        newDatabaseFormLabelPosition: 'left',
        DBForm: DBForm,
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
          dbAuthType: [
            {
              required: true,
              message: '请输入授权类型',
              trigger: 'blur'
            }
          ],
          dbOracleAuthType: [
            {
              required: true,
              message: '请选择授权类型',
              trigger: 'blur'
            }
          ],
          dbSID: [
            {
              required: true,
              message: '请输入服务名/SID',
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
        this.newDatabaseFormTitleCreate = true
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
      editDBItem (index, rows) {
        this.$router.push({
          name: 'DBTable',
          params: {
            id: rows[index].id
          }
        })
      },
      editItem (index, rows) {
        this.DBForm = rows[index]
        this.newDatabaseFormTitleCreate = false
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
            // 重置表单
            that.$refs[DBForm].resetFields()
          }
          console.log(that.$refs)
        })
      },
      testConnection () {
        console.log('测试数据库连接')
      },
      clearDBFrom () {
        this.DBForm = Object.assign({}, DBForm)
      }
    },
    watch: {
      'DBForm.dbType': function (val) {
        // 只有在新建时，才可修改
        if (this.newDatabaseFormTitleCreate) {
          switch (val) {
            case 'MySQL':
              this.DBForm.dbPort = '3306'
              this.DBForm.username = 'root'
              break
            case 'SQL Server':
              this.DBForm.dbPort = '1433'
              this.DBForm.dbDefault = 'master'
              this.DBForm.dbAuthType = 'Basic'
              this.DBForm.username = 'sa'
              break
            case 'Oracle':
              this.DBForm.dbOracleAuthType = 'Basic'
              this.DBForm.dbPort = '1521'
              break
            default:
              this.DBForm = Object.assign({}, DBForm)
          }
        }
      }
    },
    computed: {
      newDatabaseFormTitle () {
        let titlePrefix = '新建'
        if (!this.newDatabaseFormTitleCreate) {
          titlePrefix = '修改'
        }
        return titlePrefix + this.DBForm.dbType + '关联库'
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
        color: @color-negative-active;
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
      .test-connection-btn {
        float: left;
      }
    }
  }
</style>
