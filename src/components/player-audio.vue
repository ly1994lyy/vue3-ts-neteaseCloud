<template>
  <div
    class="w-screen flex flex-col h-18 hover: fixed bottom-0 bg-gray-200 dark:bg-gray-800"
  >
    <div class="w-screen flex h-18 justify-around">
      <audio
        ref="audioRef"
        :src="url"
        @canplay="getDuration"
        @timeupdate="getCurrentTime"
        @ended="pause"
      ></audio>
      <svg
        v-if="!playStatus"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        @click="play"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        @click="pause"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>{{ formatDuration(duration) }}</div>
      {{ formatTimestamp(currentTime) }}
      <div @click="down">降低音量</div>
    </div>
    <div>
      <input
        v-model="currentTime"
        class="w-screen"
        type="range"
        :max="duration"
        @input="changeCurrentTime"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePlay } from '@/hooks/usePlay';
import { formatDuration, formatTimestamp } from '@/utils/time-filter';

const audioRef = ref<HTMLElement | null>(null)
const duration = ref(0)
const currentTime = ref(0)
const playStatus = ref(false)
const { url } = usePlay()

const play = () => {
  playStatus.value = true
  audioRef.value.play()
}

const pause = () => {
  playStatus.value = false
  audioRef.value.pause()
}

const down = () => {
  audioRef.value.volume -= 0.1
}

nextTick(() => {
  audioRef.value.volume = 0.2
})

const getCurrentTime = () => {
  currentTime.value = parseInt(String(audioRef.value.currentTime))
}

watch(
  () => url.value,
  () => {
    nextTick(() => {
      play()
    })
  }
)

const getDuration = () => {
  duration.value = audioRef.value.duration
}

const changeCurrentTime = () => {
  audioRef.value.currentTime = currentTime.value
}
</script>
