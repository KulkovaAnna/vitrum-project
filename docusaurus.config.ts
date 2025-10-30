import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Витрум-Вики',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },

  url: 'http://localhost:3000',
  baseUrl: '/',
  organizationName: 'KulkovaAnna',
  projectName: 'VitrumProject',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },
  plugins: [
    function webpackPlugin() {
      return {
        name: 'webpack-config-plugin',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                '@': require('path').resolve(__dirname, 'src'),
              },
            },
          };
        },
      };
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/character.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Витрум-Вики',
      logo: {
        alt: 'Vitrum Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'booksSidebar',
          position: 'left',
          label: 'Books',
        },
        {
          type: 'docSidebar',
          sidebarId: 'charactersSidebar',
          position: 'left',
          label: 'Characters',
        },
        {
          type: 'docSidebar',
          sidebarId: 'worldSidebar',
          position: 'left',
          label: 'World',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.gruvboxMaterialLight,
      darkTheme: prismThemes.gruvboxMaterialDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
