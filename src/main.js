import { convertCurrency } from './currency/convertCurrency'
import { updateChart } from './exchange-chart/updateChart.js'
import loadCurrencies from './ui/loadCurrencies.js'
import swapCurrencies from './ui/swapCurrencies.js'
import toggleLoadingCircle from './ui/toggleLoadingCircle.js'
import toggleResultSection from './ui/toggleResultSection.js'

const swapCurrencyBtn = document.getElementById('swap-currency')
const form = document.querySelector('form')

const resultCurrency = document.getElementById('result-currency')
const resultInfo = document.getElementById('result-info')
const exchangeRateLabel = document.getElementById('exchange-rate-label')

function formatValue(result, currencyName) {
  let formattedValue = null

  // Some currencies aren't supported by the Intl API so it will give an error
  try {
    const formatter = new Intl.NumberFormat(navigator.languages, {
      style: 'currency',
      currency: currencyName.toUpperCase(),
    })

    formattedValue = formatter.format(result)
  } catch (_) {
    formattedValue = `${result.toFixed(2)} ${currencyName.toUpperCase()}`
  }

  return formattedValue
}

form.addEventListener('submit', async e => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = {
    amount: formData.get('amount'),
    fromCurrency: formData.get('from-currency'),
    toCurrency: formData.get('to-currency'),
  }

  toggleLoadingCircle()
  toggleResultSection(true)

  const result = await convertCurrency(
    data.amount,
    data.fromCurrency,
    data.toCurrency,
  )

  resultCurrency.textContent = formatValue(result, data.toCurrency)
  resultInfo.textContent = `${formatValue(
    Number(data.amount),
    data.fromCurrency,
  )} = ${formatValue(result, data.toCurrency)}`

  updateChart(data.fromCurrency, data.toCurrency)
  toggleResultSection(false)
  toggleLoadingCircle()

  exchangeRateLabel.textContent = `${data.fromCurrency.toUpperCase()} to ${data.toCurrency.toUpperCase()} exchange rate over the past month`
})

loadCurrencies()
swapCurrencyBtn.addEventListener('click', swapCurrencies)
