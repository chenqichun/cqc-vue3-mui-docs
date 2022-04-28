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
            [ 'toast', 'Toast提示']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'loading', 'Loading弹框']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'range', 'range滑条']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'switch', 'switch开关']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'slide', 'slide滑动选择/删除']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'scroll', 'scroll滚动']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'load-more', 'loader-more 上拉加载/下拉刷新']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'infinite-scroll', 'infinite-scroll无限滚动']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'sign-board', 'sign-board画板']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'waitting', '未完待续...']
          ]
        },
      ]
    }
  }
}