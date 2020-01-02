// .vuepress/config.js
module.exports = {
    plugins: [
        [
            //还可以使用gittalk，创建好网站后使用
          'vuepress-plugin-comment',
          {
            choosen: 'valine', 
            // options选项中的所有参数，会传给Valine的配置
            options: {
              el: '#valine-vuepress-comment',
              appId: 'p8SSeKE80ahukHs3qRl5iAmo-gzGzoHsz',
              appKey: 'QacafvI89BpsL5gUXkpTxMHi'
            }
          }
        ]
      ],
    locales: {
        '/': {
          lang: 'zh-CN',
          title: '飞跃高山',
          description: '一个小众的博客网站',
        },
        '/en/': {
          lang: 'en-US',
          title: 'VuePress',
          description: 'Vue-powered Static Site Generator',
        }
      },
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],
    themeConfig: {
        lastUpdated: '上次更新',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/about/' },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' },
              {
                text: '亚洲',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
            ]
          },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: 'auto',
        activeHeaderLinks: false
      }
  }