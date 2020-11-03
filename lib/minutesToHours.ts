import pluralize from './pluralize'

const minutesToHours = (minutes: number): string => {
  if (minutes < 60)
    return `${minutes} ${pluralize(minutes, 'minute', 'minutes')}`

  const hours = Math.floor(minutes / 60)
  const remainder = minutes % 60

  const hoursString = `${hours} ${pluralize(hours, 'hour', 'hours')}`
  const remainderString =
    remainder > 0
      ? ` ${remainder} ${pluralize(remainder, 'minute', 'minutes')}`
      : ''

  return `${hoursString}${remainderString}`
}

export default minutesToHours
