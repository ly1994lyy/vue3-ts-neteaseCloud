export const useHttp = api => {
  const loading = ref(false)
  const httpData = ref(null)

  const getData = async (params: any) => {
    try {
      loading.value = true
      const res = await api(params)
      if (res.code === 200) {
        httpData.value = res
      }
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    httpData,
    getData
  }
}
