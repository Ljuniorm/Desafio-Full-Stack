export const SET_CURRENCIES = (state, currencies) => {
  let currenciesArray = []
  for(var i in currencies)
  if(currencies[i].name) currenciesArray.push(currencies[i])
  state.currencies = currenciesArray
}
