import axios from 'axios'

const baseURL = 'http://192.168.0.105:5000'

const axiosInstance = axios.create({
    baseURL: baseURL
})

export default axiosInstance