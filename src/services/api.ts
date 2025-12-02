import axios from 'axios'

const axiosConfig = axios.create({
//   baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = ''
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default axiosConfig
