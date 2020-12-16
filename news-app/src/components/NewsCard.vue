<template>
  <section class="news">
    <div class="news__section">
      <h1 class="news__author" v-if="article.author">[ {{ article.author }} ]</h1>
      <h3 class="news__title">
        <a class="article__link" :href="article.url" target="_blank" rel="noopener">
          {{ article.title }}
        </a>
      </h3>
      <!-- <p class="article__paragraph">{{ article.description }}</p> -->
      <h5 class="article__published">{{ getDateJP(article.publishedAt) }}</h5>
    </div>
    <div class="image__container">
      <img
        class="news__img"
        src="../assets/icon.png"
        :data-src="article.urlToImage"
        :alt="article.title"
      />
    </div>
  </section>
</template>
<script>
  export default {
    name: "news-card",
    props: {
      article: Object,
    },
    mounted() {
      this.lazyLoadImages();
    },
    methods: {
      lazyLoadImages() {
        const images = document.querySelectorAll(".news__img");
        const options = {
          // If the image gets within 50px in the Y axis, start the download.
          root: null, // Page as root
          rootMargin: "0px",
          threshold: 0.1,
        };
        const fetchImage = (url) => {
          return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = url;
            image.onload = resolve;
            image.onerror = reject;
          });
        };
        const loadImage = (image) => {
          const src = image.dataset.src;
          fetchImage(src).then(() => {
            image.src = src;
          });
        };
        const handleIntersection = (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              loadImage(entry.target);
            }
          });
        };
        // The observer for the images on the page
        const observer = new IntersectionObserver(handleIntersection, options);
        images.forEach((img) => {
          observer.observe(img);
        });
      },
      getDateJP(publishedAt) {
        const publishedAtDate = new Date(publishedAt);
        const year = publishedAtDate.getFullYear();
        const month = publishedAtDate.getMonth()+1;
        const date = publishedAtDate.getDate();
        const hours = publishedAtDate.getHours() < 10 ? "0" + publishedAtDate.getHours() : publishedAtDate.getHours();
        const minutes = publishedAtDate.getMinutes() < 10 ? "0" + publishedAtDate.getMinutes() : publishedAtDate.getMinutes();
        const day = ['日','月','火','水','木','金','土'][publishedAtDate.getDay()];
        return year + '/' + month + '/' + date + '（' + day + '）' + ' ' + hours + ':' + minutes;
      }
    },
  };
</script>
<style>
  .news {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 550px;
    padding: 20px 5px;
    box-sizing: border-box;
    margin: 15px 5px;
    border-radius: 4px;
    border: white 1px solid;
  }
  .news__section {
    width: 100%;
    max-width: 350px;
    margin-right: 5px;
  }
  .news__title {
    font-size: 15px;
    text-align: left;
    margin-top: 0;
  }
  .news__author {
    font-size: 14px;
    text-align: left;
    font-weight: normal;
    margin-top: 0;
  }
  .article__published {
    text-align: left;
  }
  .image__container {
    width: 100%;
    max-width: 180px;
    max-height: 180px;
  }
  .news__img {
    transition: max-width 300ms cubic-bezier(0.4, 0, 1, 1),
      max-height 300ms cubic-bezier(0.4, 0, 1, 1);
    max-width: 150px;
    max-height: 150px;
  }
  .article__link {
    text-decoration: none;
    color: inherit;
  }
</style>