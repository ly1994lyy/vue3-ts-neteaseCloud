<template>
  <div class="fixed z-50">
    <div
      class="px-20 w-screen h-20 flex justify-between items-center bg-white dark:bg-black"
    >
      <div class="flex cursor-pointer items-center" @click="goHome">
        <img class="w-12 h-12" src="@/assets/Music.png" alt="" />
        <p class="ml-2 text-xl font-black">唯有音乐</p>
      </div>
      <div class="flex px-5">
        <div
          v-for="menu in menuList"
          :key="menu.path"
          :class="`mx-5 font-bold cursor-pointer ${
            route.name === menu.path
              ? 'border-b-2 border-gray-600 dark:border-white'
              : ''
          }`"
          @click="routerPage(menu.path)"
        >
          {{ menu.menuName }}
        </div>
      </div>
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-black cursor-pointer dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="changeMode"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <div class="ml-2 cursor-pointer" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const login = () => {
  console.log('sds')
}

const goHome = () => {
  router.push({ name: 'home' })
}

const routerPage = (pathName: string) => {
  router.push({ name: pathName })
}

const menuList = [
  { menuName: '首页', path: 'home' },
  { menuName: '资源库', path: '' },
  { menuName: '曲库', path: '' },
  { menuName: '歌手', path: 'artistlist' },
  { menuName: '歌单', path: '' }
]

const changeMode = () => {
  if (document.documentElement.classList.value.indexOf('dark') > -1) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}
</script>
