<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>For Test</h2>
    <ul>
      <li><button @click="axiosGet">axios click</button><span>{{ axiosGetMessage }}</span></li>
      <li><button @click="axiosErrorGet">axios error click</button><span>{{ axiosErrorGetMessage }}</span></li>
    </ul>
  </div>
</template>

<script>
import HelloApi from '../api/HelloApi'

const api = new HelloApi()

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      axiosGetMessage: '',
      axiosErrorGetMessage: ''
    }
  },
  methods: {
    // axios GET 测试
    axiosGet () {
      let that = this
      api.login().then(function (resp) {
        console.log(resp)
        that.axiosGetMessage = 'status code:' + resp.data.code
        // TODO: change axios headers
        that.$ajax.defaults.headers.common['Authorization'] = resp.data.data.token
      })
    },
    axiosErrorGet () {
      let that = this
      api.error().then(function (resp) {
        console.log(resp)
        that.axiosErrorGetMessage = 'status code:' + resp.data.code
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
