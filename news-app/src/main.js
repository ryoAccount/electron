import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
// var dayjs = require('dayjs')

Vue.config.productionTip = false;
// Vue.prototype.$dayjs = dayjs

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");