import axios from 'axios';

const API_KEY = '4d0eb714a3f88d8b437c0eb84f39c955';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}
