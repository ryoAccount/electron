<template>
  <section class="top-news">
    <div class="country-selector__div">
      <select
        id="country"
        v-model="country"
        name="country"
        class="country__selector"
      >
        <option
          v-for="(country, index) in countries"
          :key="index"
          :value="country"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
    <h4 v-if="articles">
      Top News from {{ country.name }}
    </h4>
    <div
      v-if="articles"
      class="articles__div"
    >
      <news-card
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </div>
    <div
      v-else
      class="news--empty"
    >
      <p>{{ statusMsg }}</p>
    </div>
  </section>
</template>

<script>
import NewsCard from "@/components/NewsCard";
import { mapActions, mapState } from "vuex";
export default {
    name: "TopNews",
    components: {
        NewsCard,
    },
    data() {
        return {
            country: "",
            articles: null,
            statusMsg: "Select a country"
        };
    },
    computed: {
        ...mapState(["countries", "countryIndex"]),
    },
    watch: {
        country: "fetchTopNews",
    },
    mounted() {
        this.country = this.countries[this.countryIndex];
    },
    methods: {
        ...mapActions(["getTopNews"]),
        async fetchTopNews() {
            this.articles = null;
            if (this.country.value !== "") this.statusMsg = "Loading...";
            let country = this.country.value;
            let { data } = await this.getTopNews(country);
            this.articles = data.articles;
        },
    },
};
</script>

<style>
    .country-selector__div {
        height: 100px;
        margin: 30px 0;
    }
    .country__selector {
        color: #dfefff;
        height: 30px;
        background-color: #131415;
        border-radius: 4px;
        width: auto;
    }
</style>