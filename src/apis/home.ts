import axiosInstance from './http'

// 获取推荐歌单
export const getPersonalized = (limit: number) => {
  return axiosInstance.get('/personalized', {
    params: { limit }
  })
}

// 获取歌单详情
export const getPlayListDetail = (id: number) => {
  return axiosInstance.get('playlist/detail', {
    params: { id }
  })
}

// 获取推荐新歌
export const getNewSong = (limit: number) => {
  return axiosInstance.get('/personalized/newsong', { params: { limit } })
}

// 获取热门歌手
export const getHotArtist = (limit: number) => {
  return axiosInstance.get('/top/artists', { params: { limit } })
}
