<template>
  <img
    v-image="picUrl"
    :class="`w-${imgSize ? imgSize : 'full'} h-${
      imgSize ? imgSize : 'full'
    } rounded-md hover:opacity-80 cursor-pointer`"
    alt=""
    @click="playSong"
  />
</template>

<script setup lang="ts">
import { usePlay } from '@/hooks/usePlay'

interface IPros {
  picUrl: string
  id?: number
  imgSize: string
}

const props = defineProps<IPros>()

const { changeId } = usePlay()
const playSong = () => {
  if (props.id) {
    changeId(props.id)
  }
}
</script>

<style scoped></style>
