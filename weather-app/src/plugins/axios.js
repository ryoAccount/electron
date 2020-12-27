import axios from "axios";
const proxy = 'https://cors-anywhere.herokuapp.com/';
const baseURL = "https://api.darksky.net/forecast/";
const apiKey = process.env.VUE_APP_APIKEY || "a7499c41a68053c20f071781591743a5";
const instance = axios.create({
    baseURL: proxy + baseURL + apiKey + "/",
    timeout: 30000,
});
export default instance;