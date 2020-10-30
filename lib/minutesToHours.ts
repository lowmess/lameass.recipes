const minutesToHours = (minutes: number): string => {
  if (minutes < 60) return `${minutes} minutes`

  const hours = Math.floor(minutes / 60)
  const remainder = minutes - hours * 60

  return `${hours} hours ${remainder} minutes`
}

export default minutesToHours
