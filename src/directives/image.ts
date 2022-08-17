import ErrorImage from '@/assets/errorImage.jpg'
import placehoderImage from '@/assets/Music.png'

const imageIsExist = function (url: string) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = function () {
      // 图片地址有效
      if (this.complete === true) {
        resolve(image)
      }
    }
    image.onerror = () => {
      // 图片加载失败
      reject('could not load image')
    }
    image.src = url
  })
}

const img = (el, binding) => {
  el.setAttribute('src', placehoderImage)
  const realImageUrl = binding.value
  if (realImageUrl) {
    imageIsExist(realImageUrl)
      .then(() => {
        el.setAttribute('src', realImageUrl)
      })
      .catch(() => {
        el.setAttribute('src', ErrorImage)
      })
  }
}

export default img
