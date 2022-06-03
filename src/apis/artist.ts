import axiosInstance from './http'

//获取歌手详情
export const getArtistDetail = (id: number) => {
  return axiosInstance.get('/artist/detail', { params: { id } })
}
