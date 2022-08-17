<template>
  <div>
    <div class="flex">
      <div>
        <img v-image="artistInfo.cover" class="w-40 h-40 rounded-full" alt="" />
      </div>
      <div>{{ artistInfo.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArtistDetail } from '@/apis/artist'

interface IArtist {
  id: number
  name: string
  desc: string
  cover: string
}

const artistInfo = ref<IArtist>({
  id: 0,
  name: '',
  desc: '',
  cover: ''
})

const route = useRoute()
const init = async () => {
  try {
    const res = await getArtistDetail(Number(route.params.id))
    if (res.code === 200) {
      artistInfo.value = res.data.artist
    }
  } catch (error) {
    console.log(error)
  }
}

init()
</script>

<style scoped></style>
