const API_KEY = '4d0eb714a3f88d8b437c0eb84f39c955';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;


    return{
        type: FETCH_WEATHER,
        // payload: 
    };
}