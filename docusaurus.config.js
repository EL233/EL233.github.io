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
        docs: false,
        blog: {
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
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/1.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: '',
          src: '/img/1.png',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [],  // 清空默认链接，使用自定义组件
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