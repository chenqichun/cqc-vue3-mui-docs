module.exports = {
  base: '/lib/vue3-mui-docs/',
  title: 'cqc-vue3-mui文档',
  description: '一个基于vue3开发的h5端ui库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
      { 
        text: 'GitHub',
        link: 'https://github.com/chenqichun/cqc-vue3-mui.git'
      }
    ],
    sidebar: {
      '/components/': [
        {
          collapsable: false,
          children: [
            [ 'guide', '快速上手']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'toast', '消息提示']
          ]
        },
      ]
    }
  }
}