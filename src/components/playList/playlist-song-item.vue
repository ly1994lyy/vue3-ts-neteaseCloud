<template>
  <div
    class="flex pr-5 justify-between mt-2 items-center rounded-md hover:bg-gray-50 hover:dark:bg-gray-800"
  >
    <div class="flex">
      <CommonImage :id="id" :pic-url="picUrl" radius-size="md" img-size="20" />
      <div class="flex flex-col ml-3 justify-around">
        <div
          class="cursor-pointer hover:border-b-2 hover:border-gray-900 text-xl font-bold"
          @click="playSong"
        >
          {{ songName }}
        </div>
        <div>
          <span
            v-for="artist in ar"
            :key="artist.id"
            class="cursor-pointer hover:border-b-2 hover:border-gray-900"
          >
            <span class="ml-2" @click="goArtistInfo(artist.id)">{{
              artist.name
            }}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="cursor-pointer hover:border-b-2 hover:border-gray-900">
      {{ albumName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlay } from '@/hooks/usePlay'

interface IArtist {
  id: number
  name: string
}

interface Iprops {
  id: number
  picUrl: string
  ar: Array<IArtist>
  albumName: string
  songName: string
}
const router = useRouter()
const props = defineProps<Iprops>()
const { changeId } = usePlay()
const playSong = () => {
  changeId(props.id)
}

const goArtistInfo = (artistID: number) => {
  router.push({ name: 'artistinfo', params: { id: artistID } })
}
</script>

<style scoped></style>
