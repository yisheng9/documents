// .vuepress/config.js
module.exports = {
  theme:'reform',
    plugins: [
    '@vuepress/back-to-top',
    '@vuepress/google-analytics':
    {
      'ga': 'UA-156047328-1'
    }
  ],

    locales: {
        '/': {
          lang: 'zh-CN',
          title: 'LAMMPS 学习笔记',
          description: '一个小众的博客',
        },
        /**'/en/': {
          lang: 'en-US',
          title: 'Lammps Study Notes',
          description: 'A small blog site',
        }
        **/
      },
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],
      base:'/documents/',
    themeConfig: {
        lastUpdated: '上次更新',
        docsDir:'docs',
        //displayAllHeaders: true, // 默认值：false
        repo: 'yisheng9/documents',
        editLinks: true,
        tags:"tags",
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',

        gitalk: {
          // gitalk的主要参数
          clientID: `4d4249e08f528096b474`,
          clientSecret: `e2415d58177883dd5f4d9d076dd12442253cd218`,
          repo: `documents`,
          owner: "yisheng9",
          admin: ["yisheng9"],
          accessToken: 'ceb74562e0e8da42788501a86bd0d1d4cbdc04f3',
          labelRule: `(title,path)=> {
            let paths=path.split('/')
            if(paths.length>0){
              let res = paths.pop()
              if(res===''){
                res=paths.pop()
              }
              res = res.slice(-50)
              return res
            }else{
              return title
            }
          }`
        },




        nav: [
          { text: '主页', link: '/' },
          { text: 'LAMMPS 学习文档', link: '/note/' },
          {
          text: '辅助资料',
          items: [
            { text: 'Linux 命令入门', link: '/linux/' },
            { text: '可视化软件使用', link: '/visualization/' },
            { text: '科研心得', link: '/science/' }
          ]
          },
          {
            text: "标签云",
            link: '/tags/',
            tags: true
          },
          {
            text: 'LAMMPS官方文档', link: 'https://lammps.sandia.gov/doc/Manual.html' 
          },
        ],
        //sidebar: 'auto',
        sidebar: {
          '/note/': [
            '/note/',
            '/note/1.1',
            '/note/1.2',
            '/note/1.3',
            '/note/1.4',
            '/note/1.5',
            '/note/1.6',
            '/note/1.7'
          ]
        },

        smoothScroll: true,
        activeHeaderLinks: false
      }
  }