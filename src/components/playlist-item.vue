<template>
  <div class="w-1/6 px-4" @click="getSonglistDetail">
    <CommonImage :pic-url="picUrl" :radius-size="radiusSize" />
    <div
      class="w-full text-xs truncate text-red-800 dark:text-white mt-1 cursor-pointer"
    >
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface IPros {
  picUrl: string
  name: string
  id: number
  radiusSize: string
}

const props = withDefaults(defineProps<IPros>(), {
  radiusSize: 'md'
})
const router = useRouter()

const getSonglistDetail = () => {
  router.push(`/playlist/${props.id}`)
}
</script>

<style scoped></style>
