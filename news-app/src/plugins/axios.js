import axios from "axios";
let baseURL = `https://newsapi.org/v2`;
let apiKey = process.env.VUE_APP_APIKEY || '44eb373bd1c24b68b5474741816b1551';
const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
        "X-Api-Key": apiKey,
    },
});
export default instance;