// .vuepress/config.js
module.exports = {
    plugins: [
        [
        ]
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
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        nav: [
          { text: '主页', link: '/' },
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