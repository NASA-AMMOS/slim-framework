// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// ---------------------------------------------------------------------------
// CUSTOMIZE ME: the values below are the main things to change when adopting
// this framework for your own project. Everything else is driven from here,
// from `static/data/registry.json`, and from the `brandingConfig` block.
// ---------------------------------------------------------------------------

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Best Practices Marketplace",
  tagline: "An AI-native marketplace of best practices — discoverable and executable by AI agents.",
  favicon: "/img/favicon.svg",

  // Set the production url of your site here
  url: "https://nasa-ammos.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/slim-framework/",

  // GitHub pages deployment config.
  organizationName: "nasa-ammos",
  projectName: "slim-framework",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/NASA-AMMOS/slim-framework/tree/main/",
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/NASA-AMMOS/slim-framework/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Best Practices Marketplace",
        logo: {
          alt: "Best Practices Marketplace",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "contributeSidebar",
            position: "left",
            label: "Contribute",
          },
          {
            type: "docSidebar",
            sidebarId: "faqSidebar",
            position: "left",
            label: "FAQ",
          },
          {
            type: "docSidebar",
            sidebarId: "aboutSidebar",
            position: "left",
            label: "About",
          },
          {
            href: "https://github.com/NASA-AMMOS/slim-framework",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Contribute",
                to: "/docs/contribute/contributing/",
              },
              {
                label: "FAQ",
                to: "/docs/faq",
              },
              {
                label: "About",
                to: "/docs/about",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Discussions",
                href: "https://github.com/NASA-AMMOS/slim-framework/discussions",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/NASA-AMMOS/slim-framework",
              },
            ],
          },
        ],
        copyright: `Built with the <a href="https://github.com/NASA-AMMOS/slim-framework" style="color: cyan;">Best Practices Marketplace framework</a>.<br/>Copyright © ${new Date().getFullYear()}. Contents licensed under Apache License Version 2.0.<br/>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
    }),

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Custom fields for marketplace framework configuration
  customFields: {
    // Enhanced branding configuration for easy customization
    brandingConfig: {
      // Visual Assets
      logoPath: "/img/logo.svg",

      // Hero Section Control
      hero: {
        showCornerFeatures: true, // Toggle corner features display
        cornerFeatures: [
          {
            position: "top-left",
            icon: "ai-centric.png",
            text: "AI-powered automation for instant best practice infusion",
            enabled: true,
          },
          {
            position: "bottom-left",
            icon: "community.svg",
            text: "Made by the community for the community",
            enabled: true,
          },
          {
            position: "top-right",
            icon: "iterative.svg",
            text: "Fully open source and free of charge",
            enabled: true,
          },
          {
            position: "bottom-right",
            icon: "scope.svg",
            text: "Skills, agents, and MCP servers for any workflow",
            enabled: true,
          },
        ],
        customTagline: null, // Override global tagline specifically for hero
      },

      // Marketplace Control
      marketplace: {
        showEmptyState: true, // Show friendly message when marketplace is empty
        // Note: registries are configured under marketplaceConfig.registries
      },
    },

    marketplaceConfig: {
      // Registries the website loads and displays. The first entry is the
      // local, hand-authored source of truth (static/data/registry.json).
      // Add remote registry URLs to federate other marketplaces — the
      // browser shows a registry picker when more than one is listed.
      registries: [
        "./static/data/registry.json", // Local registry (hand-authored source of truth)
        "https://nasa-ammos.github.io/slim/data/registry.json", // Example remote marketplace
      ],
    },
  },
};

module.exports = config;
