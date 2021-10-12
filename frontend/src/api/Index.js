/*const API_KEY = '76cb9956a2915c574207bdfb67307034';
const BASE_URL = 'https://api.themoviedb.org/3';*/

export const getPopularMovies = () => {
    return fetch(`http://localhost:5001/popular/getpopular`)
        .then((response) => response.json())
            }

export const getUpcomingMovies = () => {
    return fetch(`http://localhost:5001/upcoming/getupcoming`)
        .then((response) => response.json())
    }

export const getNowPlayingMovies = () => {
    return fetch(`http://localhost:5001/nowplaying/getnowplaying`)
            .then((response) => response.json())
        }


