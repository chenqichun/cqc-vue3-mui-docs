import Vue from 'vue'
import hl from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

Vue.directive('highlight', el => {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hl.highlightBlock(block)
  })
})
Vue.prototype.$url_base = 'http://www.chenqichun.com/lib/v3-moblie/#'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer
}) => {

}