const currenciesDropdowns = document.querySelectorAll('.currency-choice')

import { getCurrencies } from '../currency/getCurrencies'

export default async function loadCurrencies() {
  const currencies = await getCurrencies()

  currenciesDropdowns.forEach(dropdown => {
    Object.entries(currencies).forEach(([prefix, name]) => {
      dropdown.insertAdjacentHTML(
        'beforeend',
        `
      <option value="${prefix}"><b>${prefix.toUpperCase()}</b> ${name}</option>
      `
      )
    })
  })
}
