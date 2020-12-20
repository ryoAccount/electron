import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        countries: [
            {
                name: "United States of America",
                value: "us"
            },
            {
                name: "Canada",
                value: "ca"
            },
            {
                name: "Italy",
                value: "it"
            },
            {
                name: "Russian Federation",
                value: "ru"
            },
            {
                name: "China",
                value: "cn"
            },
            {
                name: "India",
                value: "in"
            },
            {
                name: "Brazil",
                value: "br"
            }
        ],
        categories: [
            "entertainment",
            "general",
            "health",
            "science",
            "business",
            "sports",
            "technology",
        ],
    },
    mutations: {},
    actions: {
        async getTopNews(context, country) {
            let res = await axios({
                url: `/top-headlines?country=${country}`,
                method: "GET",
            });
            return res;
        },
        async getBbcNews() {
            let res = await axios({
                url: "/top-headlines?sources=bbc-news",
                method: "GET",
            });
            return res;
        },
    },
});
export default store;