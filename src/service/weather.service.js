import axios from 'axios';
import API_KEY from "@/service/API_KEY";

const BASE_URL = 'http://api.weatherapi.com/v1';
export function getWeatherByLocation(location) {
    return axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`)
        .then((res)=>res)
}
