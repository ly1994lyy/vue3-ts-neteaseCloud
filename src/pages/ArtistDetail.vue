<template>
  <div>
    <div class="flex">
      <img
        v-image="httpData.data.artist.cover"
        class="w-48 h-48 rounded-md"
        alt=""
      />

      <div class="ml-4">
        <div class="font-bold text-2xl">
          {{ httpData.data.artist.name }}
        </div>
        <div>
          {{ httpData.data.artist.briefDesc }}
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="text-xl font-sans font-bold">热门歌曲</div>
      <PlaylistSongItem
        v-for="list in songLists.songs"
        :id="list.id"
        :key="list.id"
        :song-name="list.name"
        :ar="list.ar"
        :pic-url="list.al.picUrl"
        :album-name="list.al.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArtistDetail, getSongByArtistId } from '@/apis/artist'
import { useHttp } from '@/hooks/useHttp'

const route = useRoute()
const { httpData, getData } = useHttp(getArtistDetail)
const { httpData: songLists, getData: querySongByArtist } =
  useHttp(getSongByArtistId)
getData(Number(route.params.id))
querySongByArtist({ id: Number(route.params.id) })
</script>

<style scoped></style>
