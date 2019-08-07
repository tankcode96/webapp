import axios from 'axios'
import Qs from 'qs'

const root = process.env.API_HOST

//请求拦截器
axios.interceptors.request.use(function(config) {
  return config
}, function(error) {
  // 请求出错情况
  return Promise.reject(error)
})


//响应拦截器
axios.interceptors.response.use(function(response) {
  console.log(response)
  // 在此做状态判断
}, function(error) {
  // 响应出错情况
  return Promise.reject(error)
})


export default function http({ url, data = {}, type='POST' }) {
  return new Promise((resolve, reject) => {
    console.log('请求地址：', url)
    console.log('请求参数：', data)
    const Promise = axios({
      method: type.toLowerCase(),
      url,
      baseURL: root,
      data: type === 'POST' ? Qs.stringify(data) : data,
      // 是否携带cookie信息
      withCredentials: type !== 'POST'
    })
    Promise.then(response => {
      if (response) {
        resolve(response.data)
      }
    }).catch(error => {
      reject(error)
    })
  })
}
