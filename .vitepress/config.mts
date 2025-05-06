import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SeaSlug",
  description: "Java 和 Vue 练手项目",
  head: [
    ['link', { rel: 'icon', href: 'img/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  srcDir: 'src',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'SeaSlug',
    logo: 'img/logo.png',
    search: {
      provider: 'local',
      // options are passed on to the search provider
      // https://github.com/algolia/autocomplete.js#options
      options: {
        // ...
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示结果详情',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    outlineTitle: '目录',
    outline: [2, 6],
    nav: [
      { text: '首页', link: '/' },
      { text: '操作文档', link: '/markdown-examples' },
      { text: '参考',
        items: [
          { text: 'Java',
            items: [
              { text: 'Java', link: '/java/java-base' },
              { text: 'Vue', link: '/vue/vue-base' },
              { text: 'Vuex', link: '/vuex/vuex-base' },
              { text: 'Vue Router', link: '/vue-router/vue-router-base' },
              { text: 'Vite', link: '/vite/vite-base' },
            ]
          },
          { text: 'Vue', link: '/vue/vue-base' },
          { text: 'Vuex',
            items: [
              { text: 'Java', link: '/java/java-base' },
              { text: 'Vue', link: '/vue/vue-base' },
              { text: 'Vuex', link: '/vuex/vuex-base' },
              { text: 'Vue Router', link: '/vue-router/vue-router-base' },
              { text: 'Vite', link: '/vite/vite-base' },
            ]
          },
          { text: 'Vue Router', link: '/vue-router/vue-router-base' },
          { text: 'Vite', link: '/vite/vite-base' },
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '简介1', link: '/guide/' },
            { text: '简介', link: '/guide/1111' },
            { text: '快速开始', link: '/guide/2222' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '配置', link: '/guide/1111' },
            { text: '插件', link: '/guide/2222' }
          ]
        }
      ],
      '/reference/': [
        { text: 'API 概览', link: '/reference/' },
        { text: '配置项', link: '/reference/1111' }
      ]
    },
    editLink: {
      pattern: 'https://gitee.com/roch57/seaslug-web/tree/master/src/:path',
      text: '编辑本页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()} Roch57<br>
      <a href="https://opensource.org/licenses/MIT" target="_blank">MIT Licensed</a>`
    },
    socialLinks: [
      { icon: 'github', 
        link: 'https://github.com/Roch57/seaslug-web' 
      },
      { 
        icon: { svg: '<svg t="1746514140532" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6931" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="6932"></path></svg>' },
        link: 'https://gitee.com/roch57/seaslug-web' 
      },
      { 
        icon: { svg: '<svg t="1746514053648" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5964" width="200" height="200"><path d="M234.908525 9.656195a80.468288 80.468288 0 0 1 68.398044 0 167.374038 167.374038 0 0 1 41.84351 30.577949l160.936576 140.819503H621.156306L782.092881 40.234144a168.983404 168.983404 0 0 1 41.84351-30.577949 80.468288 80.468288 0 0 1 107.022823 66.788678 80.468288 80.468288 0 0 1-17.703024 53.913753 449.817728 449.817728 0 0 1-35.406046 32.187315 232.553351 232.553351 0 0 1-22.531121 18.507706h100.58536a170.59277 170.59277 0 0 1 118.288383 53.10907A171.397453 171.397453 0 0 1 1128.106519 352.4511v462.692655a325.896565 325.896565 0 0 1-4.023415 70.00741 178.639599 178.639599 0 0 1-80.468288 112.655603 173.006819 173.006819 0 0 1-92.53853 25.749852H212.377404a341.18554 341.18554 0 0 1-72.421459-4.023415 177.834916 177.834916 0 0 1-111.046237-80.468287A172.202136 172.202136 0 0 1 1.550491 846.526387V388.66183A360.497929 360.497929 0 0 1 1.550491 321.873151a177.030233 177.030233 0 0 1 160.936575-143.233552h105.413457c-16.89834-12.070243-31.382632-26.554535-46.671607-39.429461a80.468288 80.468288 0 0 1-25.749852-65.983996A80.468288 80.468288 0 0 1 234.908525 9.656195M216.400819 321.873151a80.468288 80.468288 0 0 0-63.569948 57.937167 108.632188 108.632188 0 0 0 0 30.577949v380.615001a80.468288 80.468288 0 0 0 55.523119 80.468288 106.21814 106.21814 0 0 0 34.601364 5.63278h654.207179a80.468288 80.468288 0 0 0 76.444873-47.47629 112.655603 112.655603 0 0 0 8.046829-53.10907v-354.060465a135.186723 135.186723 0 0 0 0-38.624779 80.468288 80.468288 0 0 0-52.304387-54.718435 129.553943 129.553943 0 0 0-49.890338-7.242146H254.220914a268.764081 268.764081 0 0 0-37.820095 0z m0 0" fill="#20B0E3" p-id="5965"></path><path d="M348.368811 447.40368a80.468288 80.468288 0 0 1 55.523118 18.507706 80.468288 80.468288 0 0 1 28.163901 59.546533v80.468287a80.468288 80.468288 0 0 1-16.093658 51.499705 80.468288 80.468288 0 0 1-131.967992-9.656195 104.608774 104.608774 0 0 1-10.460877-54.718436v-80.468287a80.468288 80.468288 0 0 1 70.00741-67.593362z m416.021047 0a80.468288 80.468288 0 0 1 86.101068 75.64019v80.468288a94.147897 94.147897 0 0 1-12.070243 53.10907 80.468288 80.468288 0 0 1-132.772675 0 95.757262 95.757262 0 0 1-12.874926-57.132485v-80.468287a80.468288 80.468288 0 0 1 70.00741-70.812093z m0 0" fill="#20B0E3" p-id="5966"></path></svg>' },
        link: 'https://www.bilibili.com/' 
      }
    ]
  }
})
