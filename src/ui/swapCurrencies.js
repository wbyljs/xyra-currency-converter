const currencyChoiceOne = document.querySelector('.currency-1')
const currencyChoiceTwo = document.querySelector('.currency-2')

export default function swapCurrencies() {
  const swap = currencyChoiceOne.value

  currencyChoiceOne.value = currencyChoiceTwo.value
  currencyChoiceTwo.value = swap
}
