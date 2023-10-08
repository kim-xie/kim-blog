import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kim blog",
  description: "A VitePress Site",
  base: "/blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "简历", link: "/resume/kim.html" },
      {
        text: "宝藏",
        link: "https://www.processon.com/view/link/5f35328c7d9c084c7090d7ee",
      },
    ],

    sidebar: undefined,

    socialLinks: [{ icon: "github", link: "https://github.com/kim-xie" }],
  },
});
