const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Programmieren mit Java',
  tagline: '',
  url: 'https://appenmaier.github.io',
  baseUrl: '/programming/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'appenmaier',
  projectName: 'programming',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/appenmaier/programming/tree/main/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./node_modules/reveal.js/dist/reveal.css'),
            require.resolve('./node_modules/reveal.js/dist/theme/black.css'),
            require.resolve('./node_modules/reveal.js/plugin/highlight/monokai.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Startseite',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'documentation/introduction',
            position: 'left',
            label: 'Dokumentation',
          },
          {
            type: 'doc',
            docId: 'exercises/programming/programming',
            position: 'left',
            label: 'Übungsaufgaben',
          },
          {
            type: 'doc',
            docId: 'additional-material/instructions/cmd',
            position: 'left',
            label: 'Zusatzmaterial',
          },
          {
            href: 'https://github.com/appenmaier/programming',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Daniel Appenmaier & Steffen Merk Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
		additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;
