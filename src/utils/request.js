import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/3b87c5299c5f27c2214e78990b478788/shopping-mall',
  timeout: 5000,
  headers: {
    'content-type': 'application/json'
  }
})
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then(res => {
        resolve(res?.data)
      }, err => {
        reject(err)
      })
  })
}
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params })
      .then(res => {
        resolve(res?.data)
      }, err => {
        reject(err)
      })
  })
}
