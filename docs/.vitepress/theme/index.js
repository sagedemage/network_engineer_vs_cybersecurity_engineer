// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './theme.css'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

