<template>
  <section class="home">
    <h1>Recent Top News {{totalResults}}</h1>
    <div class="articles__div" v-if="articles">
      <news-card
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      ></news-card>
    </div>
  </section>
</template>
<script>
  import { mapActions, mapState } from "vuex";
  import NewsCard from "../components/NewsCard.vue";
  export default {
    data() {
      return {
        articles: "",
        totalResults: 0
      };
    },
    components: {
      NewsCard,
    },
    mounted() {
      this.fetchTopNews();
    },
    computed: {
      ...mapState(["countries"]),
    },
    methods: {
      ...mapActions(["getTopNews"]),
      async fetchTopNews() {
        // let countriesLength = this.countries.length;
        // let countryIndex = Math.floor(
        //   Math.random() * (countriesLength - 1) + 1
        // );
        let { data } = await this.getTopNews(
          this.countries[0].value
        );
        this.articles = data.articles;
        this.totalResults = data.totalResults;
      },
    },
  };
</script>
<style>
  .articles__div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>