const url = ref('')
export const usePlay = () => {
  const changeId = (songId: number) => {
    url.value = `http://music.163.com/song/media/outer/url?id=${String(
      songId
    )}.mp3`
  }

  return {
    url,
    changeId
  }
}
