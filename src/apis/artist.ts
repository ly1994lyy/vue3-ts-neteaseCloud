import axiosInstance from './http'

//获取歌手详情
export const getArtistDetail = (id: number) => {
  return axiosInstance.get('/artist/detail', { params: { id } })
}

interface IArtistType {
  type?: string
  area?: string
}

export const getArtistList = (params: IArtistType) => {
  return axiosInstance.get('/artist/list', { params })
}

interface ISongByArtist {
  id: number
}
//获取歌手的歌曲
export const getSongByArtistId = (params: ISongByArtist) => {
  return axiosInstance.get('/artist/songs', { params })
}
