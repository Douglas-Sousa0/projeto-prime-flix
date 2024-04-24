import axios from 'axios'

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=3792dff61fa818fad62ad3be22ed5efb&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api