export const SET_CURRENCIES = (state, currencies) => {
  let currenciesArray = []
  for(var i in currencies)
  if(currencies[i].name) currenciesArray.push(currencies[i])
  state.currencies = currenciesArray
}

export const SET_CURRENCY = (state, currency) => {
  state.currency = currency
}

export const SET_TODAY_DATE = (state, todayDate) => {
  state.todayDate = todayDate
}
