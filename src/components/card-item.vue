<template>
  <div class="w-1/6 px-4" @click="getSonglistDetail">
    <CommonImage :pic-url="picUrl" :img-size="imgSize" />
    <div
      class="w-full text-xs truncate text-red-800 dark:text-white mt-1 cursor-pointer"
    >
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import CommonImage from '@/components/common-image.vue'

interface IPros {
  picUrl: string
  name: string
  id: number
  imgSize: string
}

const props = withDefaults(defineProps<IPros>(), {
  imgSize: 'full'
})
const router = useRouter()

const getSonglistDetail = () => {
  router.push(`/playlist/${props.id}`)
}
</script>

<style scoped></style>
