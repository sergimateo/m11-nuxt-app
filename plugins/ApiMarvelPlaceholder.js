/* eslint-disable prettier/prettier */
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://gateway.marvel.com:443/',
    header: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  })
}
