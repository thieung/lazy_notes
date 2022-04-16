// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const oneDarkTheme = {
  plain: {
    backgroundColor: "#1e222a",
    color: "#abb2bf",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#777d86",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: [
        "number",
        "boolean",
        "entity",
        "url",
        "unit",
        "statement",
        "at-rule",
        "placeholder",
      ],
      style: {
        color: "#d19a66",
      },
    },
    {
      types: ["string", "regex"],
      style: {
        color: "#98c379",
      },
    },
    {
      types: ["operator", "keyword", "control", "directive"],
      style: {
        color: "#c678dd",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#e5c07b",
      },
    },
    {
      types: [
        "tag",
        "tag-id",
        "selector",
        "atrule-id",
        "attr-name",
        "attr-value",
        "variable",
      ],
      style: {
        color: "#e06c75",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LazyNotes",
  tagline:
    "A place to note everything for lazy man",
  url: "https://lazynotes.netlify.app",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "thieung", // Usually your GitHub org/user name.
  projectName: "lazy_notes", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Lazy Notes",
        logo: {
          alt: "LazyNotes Logo",
          src: "img/logo.svg",

        },
        items: [
          {
            href: "https://thelazycoder.netlify.app",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/thieung",
            position: "right",
          },
        ],
      },
      prism: {
        theme: oneDarkTheme,
        darkTheme: oneDarkTheme,
        additionalLanguages: ["lua"],
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
};

module.exports = config;
