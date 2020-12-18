<template>
  <section class="home">
    <h1>Recent Top News {{ totalResults }}</h1>
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
  </section>
</template>
<script>
import { mapActions } from "vuex";
import NewsCard from "../components/NewsCard.vue";
export default {
    components: {
        NewsCard,
    },
    data() {
        return {
            articles: "",
            totalResults: 0
        };
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