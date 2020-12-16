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
  import { mapActions } from "vuex";
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
    methods: {
      ...mapActions(["getTopNews"]),
      async fetchTopNews() {
        let { data } = await this.getTopNews("jp");
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