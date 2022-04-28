<template>
  <div class="introduce">
    <h1>介绍</h1>
    <p class="description">cqc-vue3-mui是一个基于vue3开发的移动端ui库</p>
    <p>
      <a target="_blank" href="http://www.chenqichun.com/lib/vue3-ui-docs">cqc-vue3-ui -  vue3的pc端版本</a>
    </p>
    <p>
      <a target="_blank" href="http://www.chenqichun.com/lib/vue2-ui-docs">cqc-vue2-ui -  vue2的pc端版本</a>
    </p>
    <p>扫码体验</p>
    <img src="http://www.chenqichun.com/lib/vue3-mui-docs/moblie.png" alt="" style="width: 200px;">
    <br />
    <br />
    <h1>安装</h1>
    <h3>npm安装</h3>
    <pre v-highlight>
      <code>npm i cqc-vue3-mui -S</code>
    </pre>
    <h3>CDN</h3>
    <p class="description">
      通过 unpkg.com/cqc-vue3-mui 获取到最新版本的资源，
      也可以通过unpkg.com/cqc-vue3-mui@版本号, 获取对应的版本 然后页面上引入 js
      和 css 文件就可以拉。
    </p>
    <pre v-highlight>
      <code>{{cdnCode}}</code>
    </pre>
    <h1>使用</h1>
    <h3>完整引入</h3>
    <p class="description">在 main.js 中写入以下内容：</p>
    <pre v-highlight>
      <code>{{ mainCode }}</code>
    </pre>
    <h3>按需引入</h3>
    <p class="description">
      支持按需引入，按需引入能减小项目的体积，你需要先安装babel-plugin-component
    </p>
    <pre v-highlight>
      <code>npm install babel-plugin-component -D</code>
    </pre>
    <p class="description">
      然后在.babelrc或者babel.config.js里的plugins里添加下面的代码
    </p>
    <pre v-highlight>
      <code>{{ needCode }}</code>
    </pre>
    <h3>然后使用</h3>
    <pre v-highlight>
      <code>{{ useCode }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cdnCode: `
      <body>
        <div id="app">
          {{x}}
          <br>
          <cqc-switch></cqc-switch>
          <br>
          <button @click="click">点击</button>
        </div>
      </body>
      <script src="https://unpkg.com/vue@next"><\/script>
      <link rel="stylesheet" href="cqc-vue3-mui.css">
      <script src="cqc-vue3-mui.umd.min.js"><\/script>
      <script type="module">
        const cqcUi = window['cqc-vue3-mui']
        const app = Vue.createApp({
          setup() {
            return {
              x: 1111,
              click() {
                cqcUi.Toast('哈哈哈')
              }
            }
          }
        }).use(cqcUi.default).mount('#app')
      <\/script>
      `,
    mainCode: `
    import { createApp } from 'vue'
    import cqcUI from 'cqc-vue3-mui'
    import 'cqc-vue3-mui/cqc-vue3-mui.css'

    createApp().use(cqcUI)
    `,

    needCode: `
    module.exports = {
      plugins: [
        [
          'component',
          {
            "libraryName": 'cqc-vue3-mui',
            "styleLibrary": {
              "name": "theme-chalk",
              "base": true
            }
          }
        ]
      ]
    }
    `,

    useCode: `
    import { Switch }  from 'cqc-vue3-mui'

    export default {
      install: app => {
        app.use(Switch)
        或者
        app.component(Switch.name, Switch)
      }
    }
    `
    }
  }
}
</script>

<style lang="scss" scoped>

.description {
  color: #2c3e50;;
  font-size: 16px;
}
.code {
    line-height: 1.8;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
    color: #000;
    p {
      line-height: 1;
    }
}
</style>