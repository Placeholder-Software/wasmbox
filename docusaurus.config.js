// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wasmbox',
  tagline: 'WebAssembly For Unity',
  url: 'https://placeholder-software.github.io',
  baseUrl: '/wasmbox/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/web-assembly-icon-256px.png',
  trailingSlash: true,

  // GitHub pages deployment config.
  organizationName: 'Placeholder-Software',
  projectName: 'wasmbox',
  deploymentBranch: 'gh-pages',

  plugins: [
    [
      // https://github.com/cmfcmf/docusaurus-search-local#usage
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocSidebarParentCategories: 4,
        maxSearchResults: 16,
        indexBlog: false,
      },
    ],
    'plugin-image-zoom'
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Placeholder-Software/Wasmbox/tree/master/',
        },
        blog: {
          blogTitle: 'Wasmbox Release Notes',
          postsPerPage: 5,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          path: "release_notes",
          routeBasePath: "releases"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "og:title", content: "Wasmbox" },
        { name: "og:description", content: "WebAssembly For Unity" },
        { name: "og:image", content: "https://placeholder-software.github.io/Wasmbox/img/web-assembly-icon-64px.png" },
      ],
      navbar: {
        title: 'Wasmbox: WebAssembly For Unity',
        logo: {
          alt: 'WASM Logo',
          src: 'img/web-assembly-icon-256px.png',
        },
        items: [
          {to: 'releases', label: 'Release Notes', position: 'right'}
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://placeholder-software.co.uk">Placeholder Software</a>`,
        links: [
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/A3FfTabaS7',
              },
              {
                label: 'Issue Tracker',
                href: 'https://github.com/Placeholder-Software/Wasmbox',
              },
              {
                label: 'Email',
                href: 'mailto:admin@placeholder-software.co.uk',
              },
            ],
          },
        ]
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
          container: '#zoom-container',
          template: '#zoom-template',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "csharp",
        additionalLanguages: [
          "powershell", "csharp", "cpp", "c", "zig", "rust", "wasm", "json", "lisp"
        ]
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },

      //todo: remove this header when asset is released!
      announcementBar: {
        id: 'announcement',
        content: 'Wasmbox is still in development and is not yet avilable on the asset store!',
        backgroundColor: 'rgb(236, 54, 77)',
        //textColor: '#091E42',
        //isCloseable: false,
      },
    }),
};

module.exports = config;
