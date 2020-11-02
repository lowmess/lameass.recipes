import pluralize from './pluralize'

const minutesToHours = (minutes: number): string => {
  if (minutes < 60)
    return `${minutes} ${pluralize(minutes, 'minute', 'minutes')}`

  const hours = Math.floor(minutes / 60)
  const remainder = minutes % 60

  return `${hours} ${pluralize(
    hours,
    'hour',
    'hours'
  )} ${remainder} ${pluralize(minutes, 'minute', 'minutes')}`
}

export default minutesToHours
