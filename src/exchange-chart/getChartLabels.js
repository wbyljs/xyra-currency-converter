export default function getLabels(dates) {
  return dates.map(dateStr => {
    const options = { month: 'long', day: 'numeric', timeZone: 'UTC' }
    const date = new Date(`${dateStr}T00:00:00Z`)

    return date.toLocaleDateString('en-US', options)
  })
}
