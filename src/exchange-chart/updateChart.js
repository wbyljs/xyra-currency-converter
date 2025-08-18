import { Chart } from 'chart.js/auto'
import { convertCurrency } from '../currency/convertCurrency'
import getLabels from './getChartLabels'
import getMonthDays from './getMonthDates'

const exchangeRates = []
const chart = new Chart(document.getElementById('chart'), {
  type: 'line',
  data: {
    labels: getLabels(getMonthDays()),
    datasets: [
      {
        label: 'Exchange Rate',
        data: exchangeRates,
        borderWidth: 1,
      },
    ],
  },
})

export async function updateChart(fromCurrency, toCurrency) {
  const monthDays = getMonthDays()

  const results = await Promise.all(
    monthDays.map(date => convertCurrency(1, fromCurrency, toCurrency, date))
  )

  exchangeRates.length = 0
  exchangeRates.push(...results)
  chart.update()
}
