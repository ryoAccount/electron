import axios from "axios";
let baseURL = "https://api.darksky.net/forecast/";
let apiKey = process.env.VUE_APP_APIKEY || "a7499c41a68053c20f071781591743a5";
const instance = axios.create({
    baseURL: baseURL + apiKey + "/",
    timeout: 30000,
});
export default instance;