<template>
  <div class="login">
    <div class="form">
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" icon="information"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" autoComplete="off" placeholder="请输入密码" icon="information"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-checkbox-group v-model="loginForm.rememberMe">
                <el-checkbox label="记住密码" name="rememberMe"></el-checkbox>
              </el-checkbox-group>
            </el-col>
            <el-col :span="4" :offset="6">
              <el-button type="text" @click="register">用户注册</el-button>
            </el-col>
            <el-col :span="4" :offset="2">
              <el-button type="text" @click="forgetPassword">忘记密码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button style="width: 80%" @click="doLogin('loginForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import ElCheckbox from '../../node_modules/element-ui/packages/checkbox/src/checkbox'
  import ElCheckboxGroup from '../../node_modules/element-ui/packages/checkbox/src/checkbox-group'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          username: '',
          password: '',
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
    components: {ElRow, ElButton, ElCheckboxGroup, ElCheckbox, ElInput, ElFormItem, ElForm},
    methods: {
      register () {
        console.debug('to register')
      },
      forgetPassword () {
        console.debug('to forgetPassword')
      },
      doLogin (loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            console.info('login success')
          }
        })
        console.debug('to doLogin: ' + JSON.stringify(this.form))
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url('/static/images/background.png');
  }
  .form {
    width: 27rem;
    height: 21rem;
    background-color: white;
    padding: 2em;
    position: absolute;
    right: 16%;
    top: 25%;
  }
</style>
