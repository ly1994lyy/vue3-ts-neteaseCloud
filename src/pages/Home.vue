<template>
  <div class="font-black mb-2 px-4">推荐歌单</div>
  <div class="flex flex-wrap justify-between">
    <PlaylistItem
      v-for="item in personalizeList"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :play-count="item.playCount"
      :pic-url="item.picUrl"
    />
  </div>
  <div class="font-black mb-2 px-4 mt-2">最新歌曲</div>
  <div class="flex flex-wrap justify-between">
    <PlaylistItem
      v-for="item in newSongList"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :pic-url="item.picUrl"
    />
  </div>
  <div class="font-black mb-2 px-4 mt-2">热门歌手</div>
  <div class="flex flex-wrap justify-between">
    <PlaylistItem
      v-for="item in hotArtistList"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :pic-url="item.picUrl"
      radius-size="full"
    />
  </div>
</template>

<script setup lang="ts">
import { getHotArtist, getNewSong, getPersonalized } from '@/apis/home'

interface IPersonalize {
  id: number
  name: string
  playCount: string
  picUrl: string
}

const personalizeList = ref<IPersonalize[]>()
const newSongList = ref([])
const hotArtistList = ref([])
const queryPersonalized = async () => {
  try {
    const res = await getPersonalized(6)
    if (res.code === 200) {
      personalizeList.value = res.result
    }
  } catch (error) {
    console.log(error)
  }
}

const queryNewSong = async () => {
  try {
    const res = await getNewSong(7)
    if (res.code === 200) {
      newSongList.value = res.result
    }
  } catch (error) {
    console.log(error)
  }
}

const queryHotArtist = async () => {
  try {
    const res = await getHotArtist(6)
    if (res.code === 200) {
      hotArtistList.value = res.artists
    }
  } catch (error) {
    console.log(error)
  }
}

queryPersonalized()
queryNewSong()
queryHotArtist()
</script>
