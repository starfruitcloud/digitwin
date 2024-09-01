import { defineConfig } from 'vitepress'
import zhConfig from './locales/zh.config.js'
import enConfig from './locales/en.config.js'
export default defineConfig({
  base: '/docs/',
  cleanUrls: 'without-subfolders',
  head: [['link', { rel: 'icon', href: '/docs/assets/favicon.ico' }]],
  locales: {
    root: zhConfig,
    // en: enConfig,
  },
  appearance: false,
  themeConfig: {
    logo: '/docs/assets/favicon.ico',
    search: {
      provider: 'local',
    },
  },
})
