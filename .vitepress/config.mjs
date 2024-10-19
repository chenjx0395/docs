import { defineConfig } from 'vitepress'
import { set_sidebar } from '../utils/auto_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  // base: "/docs/" ,

  // 地址栏logo
  head :[["link",{rel: "icon", href: "/logo.svg"}]],

  // 主页小标题
  title: "陳序源个人文档库",
 // SEO 描述
  description: "编程 java 项目 前端 鸿蒙 HarmonyOS 计算机 计算机网络 数据库",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo 配置
    logo: '/logo.svg',
    // 导航栏配置
    nav: [
      // 无下拉框
      { text: '主页', link: '/' },
      // 有下拉框
      { text: '项目', items:[
        { text: '星星交友', link: '/'},
        { text: '彗星AI刷题平台', link: '/'},
        { text: '恒星API调度平台', link: '/'},
      ]},
      { text: '后端', items:[
        { text: 'Java核心语法', link: '/backend/java_basic'},
        { text: 'MySQL', link: '/backend/mysql'},
      ]},
      { text: '图书', items:[
        { text: '《图解TCP/IP》', link: '/book/图解TCP_IP'},
      ]},
      { text: '其他&教程', items:[
        { text: 'VitePress建站教程', link: '/other/VitePress建立文档网站.md'},
      ]},
    ],

    // 右侧导航栏设置
    // 导航栏标题
    outlineTitle: "文章目录",
    // 导航栏接受的 md 标题级别
    outline: [1,6],

    // 修改左侧侧边栏，也是可有下拉配置
    /* sidebar: [

      {
        text: '项目',
        items: [
          { text: '星星交友', link: '/markdown-examples' },
          { text: '彗星AI刷题平台', link: '/api-examples' },
          { text: '恒星API调度平台', link: '/api-examples' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'Java核心语法', link: '/markdown-examples' },
          { text: 'MySQL数据库', link: '/api-examples' },
          { text: 'Redis', link: '/api-examples' },
        ]
      },

    ], */
    // 脚本自动生成侧边栏
    sidebar: { 
      "/backend/java_basic": set_sidebar("/backend/java_basic"), 
      "/backend/mysql": set_sidebar("/backend/mysql"), 
      "/book/图解TCP_IP": set_sidebar("/book/图解TCP_IP"), 
    },


    // 最右侧的社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenjx0395' }
    ],

    // 配置搜索栏
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换"
            }
          }
        }
      }
    },

    // 底部自定义内容
    footer:{
      copyright: "Copyright @ 2024-present 陳序源"
    }



  }
})
