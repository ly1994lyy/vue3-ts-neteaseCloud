export const formatTimestamp = (stamp: number): string => {
  if (Number(stamp) >= 60) {
    return `${parseInt(String(Number(stamp) / 60))}:${Number(stamp) % 60}`
  } else {
    return `00:${Number(stamp) >= 10 ? stamp : `0${stamp}`}`
  }
}

const floatToInt = (num: number): number => {
  return parseInt(String(num))
}

export const formatDuration = (duration:number)=>{
  const durationInt = floatToInt(duration)
  return formatTimestamp(durationInt)
}

export const formatDate = (date:number):string=>{
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth()+1
  const day = d.getDay()
  return year+'-'+month+'-'+day
}
