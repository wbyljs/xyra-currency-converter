export async function convertCurrency(
  amount,
  fromCurrency,
  toCurrency,
  date = 'latest'
) {
  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${fromCurrency}.min.json`
  )

  if (!response.ok) throw new Error('That currency does not exist')

  const data = await response.json()
  const targetCurrency = data[fromCurrency][toCurrency]
  const result = targetCurrency * Number(amount)

  return result
}
