import axios from 'axios'

const apiKey = `a4c36b3deda45afbfd7e5d7639fb01e9`;
const baseUrl = `https://api.themoviedb.org/3/`;
const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGMzNmIzZGVkYTQ1YWZiZmQ3ZTVkNzYzOWZiMDFlOSIsInN1YiI6IjYyOTBjNzA4MjA5ZjE4MTJjNGFhZjVjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2pl3kEBKWht8XuvuxaYDn_iCWC7mw1KH0UUyOf-3d_4`;

const instance = axios.create({
    baseURL: baseUrl,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;

