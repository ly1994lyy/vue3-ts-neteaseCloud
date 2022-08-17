<template>
  <div class="w-1/6 px-4 flex justify-center" @click="getArtistDetail">
    <div>
      <img
        v-image="picUrl"
        class="w-40 h-40 rounded-full cursor-pointer hover:opacity-80"
        alt=""
      />
      <div
        class="w-full text-xs truncate text-red-800 font-bold dark:text-white cursor-pointer flex justify-center mt-2"
      >
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IArtist {
  picUrl: string
  name: string
  id: number
}

const router = useRouter()
const props = defineProps<IArtist>()

const getArtistDetail = () => {
  router.push({ name: 'artistinfo', params: { id: props.id } })
}
</script>

<style scoped></style>
