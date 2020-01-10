// .vuepress/config.js
module.exports = {
  theme:'reform',
    plugins: [
      ],
    locales: {
        '/': {
          lang: 'zh-CN',
          title: 'LAMMPS 学习笔记',
          description: '一个小众的博客',
        },
        '/en/': {
          lang: 'en-US',
          title: 'Lammps Study Notes',
          description: 'A small blog site',
        }
      },
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],
      base:'/documents/',
    themeConfig: {
        lastUpdated: '上次更新',
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
          {
            text: "标签云",
            link: '/tags/',
            tags: true
          },
          { text: 'LAMMPS 学习文档', link: '/about/' },
          { text: 'Linux 命令入门', link: '/a' },
          { text: '可视化软件使用', link: '/b' },
          { text: '科研心得', link: '/c' },
          { text: 'LAMMPS官方文档', link: 'https://lammps.sandia.gov/doc/Manual.html' },
        ],
        sidebar: 'auto',
        smoothScroll: true,
        activeHeaderLinks: false
      }
  }