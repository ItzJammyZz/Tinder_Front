import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backendja.herokuapp.com/'
})

export default instance;
