<template>
  <img
    :class="`w-${imgSize ? imgSize : 'full'} h-${imgSize ? imgSize : 'full'} ${
      radiusSize ? `rounded-${radiusSize}` : ''
    } hover:opacity-80 cursor-pointer`"
    :src="picUrl"
    alt=""
    @click="playSong"
  />
</template>

<script setup lang="ts">
import { usePlay } from '@/hooks/usePlay'

interface IPros {
  picUrl: string
  id?: number
  radiusSize: string
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
