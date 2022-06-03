<template>
  <div>
    <div class="flex">
      <CommonImage
        :pic-url="playList.coverImgUrl"
        radius-size="md"
        img-size="40"
      />
      <div class="ml-10">
        <div class="font-bold text-xl">{{ playList.name }}</div>
        <div class="text-sm my-3 text-gray-400">
          <span class="cursor-pointer hover:border-b">{{
            playList.creator.nickname
          }}</span>
          <span class="ml-1"
            >创建于 : {{ formatDate(playList.createTime) }}</span
          >
        </div>
        <div>
          <span
            v-for="(tag, i) in playList.tags"
            :key="i"
            class="mx-2 rounded-md px-2 py-1 bg-blue-100 dark:bg-blue-400 border-2 text-gray-800"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mt-2 text-sm text-gray-600">
          {{ playList.description }}
        </div>
      </div>
    </div>
    <div>
      <PlaylistSongItem
        v-for="list in playList.tracks"
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
import { getPlayListDetail } from '@/apis/home'
import CommonImage from '@/components/common-image.vue'
import PlaylistSongItem from '@/components/playList/playlist-song-item.vue'
import { formatDate } from '@/utils/time-filter'

const route = useRoute()
const playList = ref({})

const queryPlayListDetail = async () => {
  try {
    const res = await getPlayListDetail(Number(route.params.id))
    if (res.code === 200) {
      playList.value = res.playlist
    }
  } catch (error) {
    console.log(error)
  }
}

queryPlayListDetail()
</script>

<style scoped></style>
