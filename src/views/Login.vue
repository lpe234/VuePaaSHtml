<template>
  <div class="login">
    <div class="form">
      <div class="header">
        <h1>PaaS 管理平台登录</h1>
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" icon="user-o"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" autoComplete="off" placeholder="请输入密码" icon="lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-checkbox-group v-model="loginForm.rememberMe">
                <el-checkbox class="remember" label="记住密码" name="rememberMe"></el-checkbox>
              </el-checkbox-group>
            </el-col>
            <el-col :span="4" :offset="6">
              <el-button class="register" type="text" @click="register">用户注册</el-button>
            </el-col>
            <el-col :span="4" :offset="2">
              <el-button class="forget" type="text" @click="forgetPassword">忘记密码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="form-login">
        <el-button class="form-login-button" @click="doLogin('loginForm')">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ElInput from '../components/el/input'

  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          username: 'admin',
          password: '123',
          rememberMe: false
        },
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    components: {ElInput},
    methods: {
      register () {
        this.$message({
          showClose: true,
          message: '注册功能尚未开放',
          type: 'warning'
        })
      },
      forgetPassword () {
        this.$message({
          showClose: true,
          message: '暂时无法重置密码'
        })
      },
      doLogin (loginForm) {
        let that = this
        that.$refs[loginForm].validate((valid) => {
          if (valid) {
            // do login
            sessionStorage.setItem('user', JSON.stringify({
              'name': that.loginForm.username,
              'avatar': ''
            }))
            that.$notify({
              title: '登陆成功',
              message: that.loginForm.username,
              type: 'success',
              duration: 600
            })
            // redirect
            that.$router.push('/')
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "../assets/base";

  .login {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background-size: cover;
    background-image: url(@login-bg-img);
    .form {
      width: 28rem;
      height: 26rem;
      background-color: white;
      border-radius: 10px;
      position: absolute;
      right: 16%;
      top: 25%;
      text-align: -webkit-center;
      .fa {
        color: @font-color-1;
      }
      form {
        width: 90%;
        padding: 4% 5%;
        background-color: @bg-color-7;
      }
      .header {
        margin: 1.5rem;
        text-align: center;
        color: @color-default;
        font-size: @font-size-medium;
        padding: auto 2em;
        h1 {
          font-weight: lighter;
        }
      }
      .form-login {
        text-align: center;
        margin: 5% 0;
      }
      .form-login-button {
        width: 80%;
        background-color: @login-btn-bg;
        border-radius: 1em;
        color: @font-color-7;
      }
      .form-login-button:hover {
        color: @font-color-6;
      }
      .form-login-button:active {
        color: @font-color-7;
      }
      .remember, .register, .forget {
        font-size: @font-size-ex-small;
      }
      .forget {
        color: @color-negative;
      }
      .forget:active {
        color: @color-negative-active;
      }
    }
  }

</style>
