const CURRENCIES_ENDPOINT =
  'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json'

export async function getCurrencies() {
  const response = await fetch(CURRENCIES_ENDPOINT)

  if (!response.ok)
    throw new Error('Could not load currencies, check your internet connection')

  const data = await response.json()

  return data
}
