import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "localhost:4000"
})

export default axiosClient;