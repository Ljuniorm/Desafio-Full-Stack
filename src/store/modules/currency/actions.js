import axios from 'axios'

export const getAnalytics = ({commit}) => {
  return axios.get(`https://api.hgbrasil.com/finance/quotations?format=json-cors&key=4a8dbaa8`).then(resp => {
    if (resp && resp.data && resp.data.results) commit('SET_CURRENCIES', resp.data.results.currencies)
  })
};

export const setTodayDate = async ({commit, getters}, params) => {
  let storageTodayDate = await localStorage.getItem('TODAY_DATE')
  let storageObjectGraphic = localStorage.getItem('OBJECT_GRAPHIC')
  let object = storageObjectGraphic ? JSON.parse(storageObjectGraphic): {}
  getters.currencies.forEach(c => {
    object[c.name] = object[c.name] ? object[c.name] : {}
    object[c.name][params] = c.buy
  })
  localStorage.setItem('TODAY_DATE', params)
  if(storageTodayDate !== params)localStorage.setItem('OBJECT_GRAPHIC', JSON.stringify(object))
  commit('SET_TODAY_DATE', params)
};
