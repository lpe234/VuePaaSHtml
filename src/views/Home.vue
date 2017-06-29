<template>
  <div class="home">
    <el-row class="header">
      <el-col :span="2">
        <div class="logo">
          <h1>PaaS 云平台</h1>
        </div>
      </el-col>
      <el-col :span="16">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu" :router=true mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">数据库建模</template>
            <el-menu-item index="/DBModel">数据库建模</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">表单设计</template>
            <el-menu-item index="/FormDesign">表单设计</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">工作流程</template>
            <el-menu-item index="/WorkFlow">工作流程</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">系统管理</template>
            <el-menu-item index="/SystemManage">系统管理</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">接口管理</template>
            <el-menu-item index="/APIManage">接口管理</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">运维监控</template>
            <el-menu-item index="/OperationMonitor">运维监控</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">共享技术服务</template>
            <el-menu-item index="/ShareService">共享技术服务</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <div class="user-info">
          <el-button type="text" icon="setting">皮肤</el-button>
          <el-button type="text" >菜单<i class="fa fa-angle-double-up"></i></el-button>
          <el-button type="text" icon="caret-top">用户名</el-button>
          <el-button type="text" icon="circle-close" @click="doLogout">退出</el-button>
        </div>
      </el-col>
    </el-row>

    <div>
      <el-col class="content-wrapper">
        <!-- 面包屑 -->
        <el-breadcrumb v-if="!$route.meta.isDefaultPage" separator=">" class="breadcrumb-inner">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
            {{ item.meta.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 默认展示页面(仅在首页展示) -->
        <div v-if="$route.meta.isDefaultPage" class="default-page">

          <!-- test element-ui -->
          <iframe class="element-ui" src="http://element.eleme.io/#/zh-CN/component/installation"></iframe>

        </div>

        <!-- 路由视图 -->
        <router-view class="content"></router-view>
      </el-col>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        activeIndex: 'home'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
        console.log(this.$route.matched)
      },
      // 退出登陆
      doLogout () {
        this.$confirm('确认要退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 1. 请求后台接口
          // 2. 清除本地数据
          sessionStorage.removeItem('user')
          // 跳转到登陆页
          this.$router.push({name: 'Login'})
        }).catch(() => {
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "../assets/base";

  .home {
    .header {
      background-color: @bg-color-1;
      .logo {
        h1 {
          font-size: 20px;
          font-weight: lighter;
          color: aliceblue;
          margin: 14px auto auto 10px;
        }
      }
      .el-menu {
        background-color: @bg-color-1;
      }
    }
    .user-info {
      float: right;
      margin: 0.8em;
      button.el-button {
        color: @font-color-6;
      }
      button.el-button:hover {
        color: @font-color-7;
      }
    }
    .breadcrumb-inner {
      border-left: 5px solid @color-default;
      padding-left: 6px;
      margin-top: 12px;
    }
    .content-wrapper {
      padding-left: 20px;
      padding-right: 20px;
    }
    .content {
      margin: 12px 20px 10px 0;
    }
    .default-page {

      /* test element-ui */
      .element-ui {
        width: 100%;
        border: 1px solid @color-positive;
        min-height: 800px;
        margin-top: 2em;
      }

    }
  }

</style>

