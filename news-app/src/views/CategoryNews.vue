<template>
  <section class="category">
    <div class="category-selector__div">
      <h4>Select a category of your choice</h4>
      <select
        id="category"
        v-model="category"
        name="category"
        class="category__selector"
      >
        <option
          v-for="(category, index) in categories"
          :key="index"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <h4 v-if="articles">
      Displaying
      <span class="category__name">
        {{ category }}
      </span>
      news all over the world
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
      <p>Loading...</p>
    </div>
  </section>
</template>

<script>
import NewsCard from "@/components/NewsCard";
import { mapActions, mapState } from "vuex";
export default {
    name: "CategoryNews",
    components: {
        NewsCard,
    },
    data() {
        return {
            articles: null,
            category: "general",
        };
    },
    computed: {
        ...mapState(["categories"]),
    },
    watch: {
        category: "fetchEveryNews",
    },
    mounted() {
        this.fetchEveryNews();
    },
    methods: {
        ...mapActions(["getEveryNews"]),
        async fetchEveryNews() {
            let query = this.category;
            this.articles = null;

            try {
                let { data } = await this.getEveryNews(query);
                this.articles = data.articles;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style>
	.category-selector__div {
		height: 100px;
		margin: 30px 0;
	}
	.category__selector {
		height: 30px;
		width: auto;
	}
	.category__name {
		text-transform: capitalize;
	}

	.category__name:hover {
		background-color: yellow;
		font-weight: bolder;
		text-decoration-color: teal;
	}
</style>