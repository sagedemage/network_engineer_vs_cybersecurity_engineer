import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Network Engineer vs Cybersecurity Engineer",
  description: "An article on if you should be a Network Engineer or Cybersecurity Engineer.",
  base: '/network_engineer_vs_cybersecurity_engineer/',
  head: [['link', { rel: 'icon', href: 'favicon/favicon.png' }]],
})
