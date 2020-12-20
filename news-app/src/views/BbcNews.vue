<template>
  <section class="home">
    <h1>BBC News</h1>
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
            articles: ""
        };
    },
    mounted() {
        this.fetchBbcNews();
    },
    methods: {
        ...mapActions(["getBbcNews"]),
        async fetchBbcNews() {
            let { data } = await this.getBbcNews();
            this.articles = data.articles;
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