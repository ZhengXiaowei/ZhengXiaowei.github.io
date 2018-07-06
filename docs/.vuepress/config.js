module.exports = {
  title: 'Xiao Blog',
  description: 'Blog for Xiao, to record my exp',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'JavaScript',
        collapsable: false,
        children: ['javascript/']
      },
      {
        title: 'Vue',
        collapsable: false,
        children: ['vue/', 'vue/vueMultipage']
      },
      {
        title: 'WebApp',
        collapsable: false,
        children: ['webapp/']
      },
      {
        title: '其他',
        collapsable: false,
        children: ['others/', 'others/vsESlint']
      }
    ]
  }
}
