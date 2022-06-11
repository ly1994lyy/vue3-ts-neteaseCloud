export const formatTimestamp = (stamp: number): string => {
  if (Number(stamp) >= 60) {
    const m = parseInt(String(Number(stamp) / 60))
    const s = Number(stamp) % 60
    return `${m >= 10 ? m : `0${m}`}:${s >= 10 ? s : `0${s}`}`
  } else {
    return `00:${Number(stamp) >= 10 ? stamp : `0${stamp}`}`
  }
}

const floatToInt = (num: number): number => {
  return parseInt(String(num))
}

export const formatDuration = (duration: number) => {
  const durationInt = floatToInt(duration)
  return formatTimestamp(durationInt)
}

export const formatDate = (date: number): string => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDay() >= 10 ? d.getDay() : '0' + d.getDay()
  return year + '-' + month + '-' + day
}
