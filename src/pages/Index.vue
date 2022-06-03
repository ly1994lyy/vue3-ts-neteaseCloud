<template>
  <div>首页</div>
</template>
<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute()

useHead({
  bodyAttrs: {
    title: route.meta.title
  },
  meta: [
    {
      property: 'og:title',
      content: route.meta.title
    },
    {
      name: 'twitter:title',
      content: route.meta.title
    }
  ]
})
</script>
