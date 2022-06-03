<template>
  <div :class="`text-${size} cursor-pointer hover:border-b-2 hover:border-gray-900`">{{ content }}</div>
</template>

<script setup lang="ts">

interface IProps{
  size:string,
  content:string
}
withDefaults(defineProps<IProps>(),{
  size:'base'
})
</script>

<style scoped>

</style>
