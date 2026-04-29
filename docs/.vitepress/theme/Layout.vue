<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, frontmatter } = useData()
const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <nav>
    <a href="./">Home</a>
  </nav>
  <main>
    <div v-if="page.isNotFound">
      <h1>404 Page Not Found.</h1> 
      Click <a href="./">here</a> to return to the home page.
    </div>
    <Content v-else />
    <footer>
      <p>&copy; <span id="copyright-year">{{year}}</span> Salmaan Saeed</p>
    </footer>
  </main>
</template>
