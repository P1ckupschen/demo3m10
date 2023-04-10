import axios from "axios";

const services = axios.create({
    baseURL: '/dev-api/',
    timeout:10000
})
export default services