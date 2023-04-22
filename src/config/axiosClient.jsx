import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://backendecommerce-j5we.onrender.com"
})

export default axiosClient;