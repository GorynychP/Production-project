import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
// 'https://863e9faeb060e6b2.mokky.dev/auth'
// const  baseUrl = __IS_DEV__?  'http://localhost:5000' : 'http://production.com'

export const $api = axios.create({
    baseURL: __API__
})

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
    return config
})
