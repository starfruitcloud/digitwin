export default {
  label: '中文',
  lang: 'zh',
  link: '/zh/api-v1.0/global',
  title: '文档',

  themeConfig: {
    appearance: false,
    nav: [
      {
        text: 'v1.0',
        items: [
          { text: 'v1.0', link: '/zh/api-v1.0/global' },
        ]
      }
    ],
    sidebar: {
      '/zh/api-v1.0/': [
        {
          items: [
            { text: '全局 API', link: '/zh/api-v1.0/global' },
            { text: '基础 API', link: '/zh/api-v1.0/base' },
            { text: '地图 API', link: '/zh/api-v1.0/tile' },
            { text: '图层 API', link: '/zh/api-v1.0/layer' },
            {
              text: '<b>要素 API</b>',
              items: [
                { text: '矢量要素', link: '/zh/api-v1.0/overlay-vector' },
                { text: '图元要素', link: '/zh/api-v1.0/overlay-primitive' },
                { text: '标绘要素', link: '/zh/api-v1.0/overlay-plot' },
              ],
            },
            { text: '材质 API', link: '/zh/api-v1.0/material' },
            { text: '工具 API', link: '/zh/api-v1.0/tools' },
            {
              text: '效果 API',
              items: [
                { text: '场景效果', link: '/zh/api-v1.0/effect-scene' },
                { text: '动画效果', link: '/zh/api-v1.0/effect-animation' },
              ],
            },
          ],
        },
      ],
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outlineTitle: '目录',
    search: {
      provider: 'local',
    },
  },
}
