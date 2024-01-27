<template>
  <div class="border-[1px]">
    <input v-model="searchText" type="text" />
    <span class="p-4">搜索</span>
  </div>
</template>

<script lang="ts" setup>
const searchText = ref('')
</script>

<style scoped>
input:focus {
  box-shadow: none;
}

input {
  border: 0;
}
</style>
