<template>
  <div class="flex flex-col">
    <div class="text-sm">
      <div>
        <span
          v-for="type in ARTIST_TYPE"
          :key="type.value"
          :class="`mx-2 cursor-pointer text-lg ${
            type.value === artistParams.type
              ? 'border-b border-black dark:border-white'
              : ''
          }`"
          @click="setType(type.value)"
        >
          {{ type.label }}
        </span>
      </div>
      <div class="my-2">
        <span
          v-for="type in ARTIST_AREA"
          :key="type.value"
          :class="`mx-2 cursor-pointer text-lg ${
            type.value === artistParams.area
              ? 'border-b border-black dark:border-white'
              : ''
          }`"
          @click="setArea(type.value)"
        >
          {{ type.label }}
        </span>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div
        v-for="artist in artistList"
        :key="artist.id"
        class="flex flex-col items-center w-1/6 my-2"
        @click="getArtistDetail(artist.id)"
      >
        <img
          v-image="artist.img1v1Url"
          class="w-4/5 rounded-md cursor-pointer hover:opacity-80"
          alt=""
        />
        <div class="m-2">{{ artist.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getArtistList } from '@/apis/artist'
import { ARTIST_AREA, ARTIST_TYPE } from '@/constants'

const artistList = ref([])
const artistParams = ref({
  type: '-1',
  area: '-1'
})
const router = useRouter()

const queryArtistList = async () => {
  try {
    const res = await getArtistList({
      type: artistParams.value.type,
      area: artistParams.value.area
    })
    if (res.code === 200) {
      artistList.value = res.artists
    }
  } catch (e) {
    console.log(e)
  }
}

const setType = (val: string) => {
  artistParams.value.type = val
  queryArtistList()
}

const setArea = (val: string) => {
  artistParams.value.area = val
  queryArtistList()
}

const getArtistDetail = (id: string) => {
  router.push({ name: 'artistinfo', params: { id } })
}

queryArtistList()
</script>

<style lang="scss" scoped></style>
