// .vuepress/config.js
module.exports = {
    title: '飞跃高山',
    description: '一个小众的博客网站',
    themeConfig: {
        lastUpdated: 'Last Updated',
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