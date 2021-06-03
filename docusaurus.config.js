module.exports = {
  title: '进阶之路',
  tagline: '',
  url: 'https://Goldwood1024.github.io',
  baseUrl: '/docs.advanced.way/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Goldwood1024', // Usually your GitHub org/user name.
  projectName: 'docs.advanced.way', // Usually your repo name.
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      hideOnScroll: true,
      title: '进阶之路',
      logo: {
        alt: '进阶之路 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/java/',
          label: 'Java',
          position: 'left',
        },
        {
          label: '生态',
          position: 'left',
          items: [
            {
              label: 'Spring家族',
              to: 'docs/zoology/spring-family/'
            },
            {
              label: '常用框架',
              to: 'docs/zoology/framework/mybatis/'
            },
            {
              label: '分布式',
              to: 'docs/zoology/distributed/'
            },
            {
              label: '容器',
              to: 'docs/zoology/cloud/docker/base/镜像/'
            },
            {
              label: '数据库',
              to: 'docs/zoology/db/mysql/InnoDB/'
            },
            {
              label: '计算机系统',
              to: 'docs/zoology/os/network/tcpip/'
            },
          ]
        },
        {
          label: '编码实践',
          position: 'left',
          items: [
            {
              label: '算法/数据结构',
              to: 'docs/algorithm/algorithm/'
            },
            {
              label: '设计模式',
              to: 'docs/patterns/'
            },
            {
              label: '系统架构',
              to: 'docs/architecture/'
            },
            {
              label: '备忘录',
              to: 'docs/practice/memo/tool/sublime/'
            },
          ]
        },

        { to: 'blog', label: '博客', position: 'right' },
        {
          href: 'https://github.com/Goldwood1024/docs.advanced.way.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} 进阶之路, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Goldwood1024/docs.advanced.way/tree/master/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          // blogSidebarTitle: 'All our posts',
          editUrl: 'https://github.com/Goldwood1024/docs.advanced.way/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
