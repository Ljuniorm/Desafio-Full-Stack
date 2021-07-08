import axios from 'axios'

export const getAnalytics = ({commit}) => {
  return axios.get(`https://api.hgbrasil.com/finance/quotations?format=json-cors&key=${process.env.VUE_APP_KEY}`).then(resp => {
    if (resp && resp.data && resp.data.results) commit('SET_CURRENCIES', resp.data.results.currencies)
  })
};
