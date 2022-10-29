//Archivo para poder usar axios y hacer las peticiones en las actions
import axios from 'axios'

const banco = axios.create({
    baseURL: 'http://localhost:3000' //url para poder hacer las peticiones
})

export default banco