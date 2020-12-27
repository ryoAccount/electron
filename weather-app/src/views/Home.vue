<template>
    <section class="home">
        <div>{{ weatherData }}</div>
    </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
    components: {},
    data() {
        return {
            weatherData: {}
        };
    },
    mounted() {
        this.fetcheatherData();
    },
    methods: {
        ...mapActions(["getWeather"]),
        async fetcheatherData() {
            let { data } = await this.getWeather({lat: 34.6918, long: 135.5051});
            this.weatherData = data;
        },
    },
};
</script>
<style>
.home {
    color: white;
}
</style>