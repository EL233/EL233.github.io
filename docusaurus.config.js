import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EL's webSite",
  tagline: 'you have to be very strong if you want to do something very wrong',
  favicon: 'img/favicon.ico',

  url: 'https://EL233.github.io',
  baseUrl: '/',

  deploymentBranch: 'main',
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
      image: 'img/1.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: '',
          src: 'img/1.png',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          
        ],
      },
      footer: {
      
        style: 'dark',
        links: [
          {
            title: 'Social',
            items:[
              {
                label: 'GitHub',
                href: 'https://github.com/EL233',
              },
              {
                label: 'B站',
                href: 'https://space.bilibili.com/38198624?spm_id_from=333.1007.0.0',
              },
              {
                label: '网易云音乐',
                href: 'https://music.163.com/#/user/home?id=422348875',
              },
            ]
          },
        ],
        copyright: 'Copyright © 2024 EL233.I Built with Docusaurus.'
      },
      algolia: {
        // Algolia 提供的应用 ID
        appId: 'X5HJ3XE2C0',
  
        //  公开 API 密钥：提交它没有危险
        apiKey: 'fb24fb295b89f94bb49122c7b6837b6a',
  
        indexName: 'el233io',
  
        // 可选：见下文
        contextualSearch: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

