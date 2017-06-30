# 项目结构及规范

## 整体说明
* 项目引入了 element-ui 似乎并没有能够解决太多的问题，大概还是要写各种组件。
* 使用了 eslint-standard 格式检查，所以必须要遵循。

## 项目基本目录
```text
HJPaaSHtml
├── build # 项目构建等相关脚本
├── config # 项目构建等相关配置
├── dist # 项目打包文件生成位置 
├── mock # 模拟数据
├── node_modules # npm依赖包
├── other # 与代码本身没有相关的其他小文件
├── src # 项目源码
│   ├── api # 项目接口类文件
│   │   ├── *Api.js
│   │   └── index.js
│   ├── assets # 项目资源类文件
│   │   └── base.less
│   ├── components # 项目组件
│   │   └── *.vue
│   ├── main.js # 项目js入口
│   ├── pages # 项目页面组件
│   │   ├── Home.vue
│   │   └── Login.vue
│   └── router # 项目路由配置
│       └── index.js
└── test # 测试
```

### build
webpack配置及脚本文件

### config
开发、测试、生成环境配置文件

### dist
项目打包后生成的文件位置

### mock
用于做模拟数据使用，并没有引入 略显复杂的 [mockjs](http://mockjs.com/) 。
只是使用了 express 处理了一下 mock下的json文件，所以仅支持GET访问。

### node_modules
npm 依赖包安装目录

### other
项目代码无关琐碎文件存放目录，比如本文。

### src

#### api
组件或页面中所有使用到的Ajax请求，必须按照规则写到该文件夹下。
* 使用了axios作为请求客户端，所有与axios相关的配置全部写在index.js文件中。
* 文件名称按驼峰式，首字母大写，后加Api。如：AuthApi.js
* 页面内部结构示例如下：

  ```javascript
  import $ from './'
  
  class AuthApi {
    login () {
      return $.get('/tapi/login.json')
    }
    logout () {
      return $.get('/tapi/logout.json')
    }
  }
  
  export default HelloApi
  ```

#### assets
一些需要进行编译的文件存放位置。比如 *.less *.sass 或 图片等
* 为了整体的页面布局及样式的统一，css文件中的相关颜色大小等相关的配置，全部写到base.less文件中。其他需要使用的直接引用即可。

#### components
此处存放一些通用基本组件。

#### pages
此处存放页面组件。也就是router中 可以直接配置的组件。具有完善业务功能的组件
* 不允许直接在dom上写 style="" 之类，只能添加class，然后在style中写相应样式
* 大体结构如下

```vue
<template>
  <div class="xxx"></div>
</template>
<script></script>
<style lang="less" scoped>
  @import '@/assets/base'
  
  /* use less */
  .xxx {
    xxx: xxx
    .xxxx {
      color: @color-default
    }
  }
</style>
```
  **注意：**
  * template子节点，必须添加class="模块"
  * 为了更好的使IDE支持，script里面的引用不要使用alias
  * style使用lang="less" scoped 方便引入全局less和不对其他元素造成影响

#### router
项目前端路由配置
* 遵循已有书写样式即可
* 引入不要使用alias

```text
路由页面组件使用懒加载的方式，以提高浏览器加载速度。避免打包时出现大文件。
```

### static
大概是存放一些不需要编译的静态文件

### test
项目测试部分(需要编写，目前尚未深入研究~~~~)
