const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EL's webSite",
  tagline: 'EL233',
  favicon: '/img/favicon.ico',
  url: 'https://EL233.github.io',
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  organizationName: 'EL233',
  projectName: 'EL233.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      zh: {
        label: '中文',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 完全禁用 docs 功能
        docs: false,
        blog: {
          // 不要设置 routeBasePath,让 blog 保持在 /blog 路径
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // 自定义页面配置
        pages: {
          path: 'src/pages',
          routeBasePath: '/',  // 确保根路径指向自定义页面
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/1.png',
      navbar: {
        title: '',  // 不显示文字标题
        logo: {
          alt: 'EL233',
          src: '/img/1.png',
          href: '/',  // 点击回首页
        },
        items: [
          // Home 链接
          { 
            to: '/', 
            label: 'Home', 
            position: 'left',
            activeBaseRegex: '^/$',  // 只在首页时高亮
          },
          // Blog 链接
          { 
            to: '/blog', 
            label: 'Blog', 
            position: 'left' 
          },
          // About 链接
          { 
            to: '/blog/about', 
            label: 'About', 
            position: 'left' 
          },
          // Archive 链接
          { 
            to: '/blog/archive', 
            label: 'Archive', 
            position: 'left' 
          },
          // Tags 链接
          { 
            to: '/blog/tags', 
            label: 'Tags', 
            position: 'left' 
          },
        ],
        hideOnScroll: false,
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: 'Copyright © 2024 EL233. Built with Docusaurus.',
      },
      algolia: {
        appId: 'X5HJ3XE2C0',
        apiKey: 'fb24fb295b89f94bb49122c7b6837b6a',
        indexName: 'el233io',
        contextualSearch: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;