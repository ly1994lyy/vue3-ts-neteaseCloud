<template>
  <div class="w-screen h-screen text-gray-900 dark:text-gray-100">
    <LayoutNav />
    <div class="px-16 pt-24 pb-20 bg-gray-100 dark:bg-gray-900">
      <router-view></router-view>
    </div>
    <PlayerAudio />
  </div>
</template>

<script setup lang="ts"></script>
