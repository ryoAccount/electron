import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        locations: [
            { value: "current", name: "現在地", lat: 0, long: 0 },
            { value: "osaka", name: "大阪", lat: 34.6918, long: 135.5051 },
            { value: "kanazawa", name: "金沢", lat: 36.5727, long: 136.6322 },
            { value: "saitama", name: "埼玉", lat: 35.8594, long: 139.6063 },
            { value: "sapporo", name: "札幌", lat: 43.0802, long: 141.3367 },
            { value: "sendai", name: "仙台", lat: 38.2589, long: 140.878 },
            { value: "tokyo", name: "東京", lat: 35.6951, long: 139.7539 },
            { value: "nagoya", name: "名古屋", lat: 35.1503, long: 136.9263 },
            { value: "naha", name: "那覇", lat: 26.2116, long: 127.6934 },
            { value: "hakata", name: "博多", lat: 33.5889, long: 130.4205 },
        ],
    },
    mutations: {},
    actions: {
        async getWeather(context, lat, long) {
            let res = await axios({
                url: `${lat},${long}`,
                method: "GET",
            });
            return res;
        },
    },
});
export default store;