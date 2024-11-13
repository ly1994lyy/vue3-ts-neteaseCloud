import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://netease-cloud-music-api-sigma-pink.vercel.app/'
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default instance
