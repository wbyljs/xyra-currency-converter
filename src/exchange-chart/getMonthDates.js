export default function getMonthDays() {
  const today = new Date()
  today.setUTCHours(0, 0, 0, 0)

  const days = []

  for (let i = 0; i < 30; i++) {
    const date = new Date(today)

    date.setUTCDate(today.getUTCDate() - i)
    days.push(date.toISOString().split('T')[0]) // to get the YYYY-MM-DD format to be used for the API
  }

  return days.reverse() //oldest to newest to make it look better
}
