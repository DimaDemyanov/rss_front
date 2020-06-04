<template>
  <div v-if="false" class="error">{{ error }}</div>
  <div v-else class="feed">
    <h1 v-if="name">{{ name }}</h1>
    <h1 v-else>{{ feed.title }}</h1>
    <div class="articles-container">
      <Article
        v-for="(article, index) of newsItems"
        v-bind:key="index"
        v-bind:article="article"
      />
     <div v-if="loading" class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
     </div>
    </div>
  </div>
</template>

<script>
import Article from "./article";
import { NEWS_ERASE, NEWS_REQUEST_NEXT_PAGE } from "@/store/actions/news";

export default {
  name: "Feed",
  components: {
    Article
  },
  props: {
    limit: Number,
  },
  data() {
    return {
      name: "News List"
    };
  },
   methods: {
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 10 + window.innerHeight >= document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.$store.dispatch(NEWS_REQUEST_NEXT_PAGE, this.$store.getters.currentResources);
          console.log(this.$store.getters.currentPage)
        }
      }
    }
  },
  mounted () {
    this.scroll()
  },
  computed: {
    newsItems() {
      return this.$store.getters.newsItems
    },
    loading() {
      return this.$store.getters.isNewsLoaidng
    }
  },
  created() {
    this.$store.commit(NEWS_ERASE);
    this.$store.dispatch(NEWS_REQUEST_NEXT_PAGE);
  },
};
</script>

<style scoped>
h1 {
  margin: 5px;
  font-size: 20px;
}
.feed {
  text-align: left;
}
a {
  color: #42b983;
}
/* CSS Spinner */
.spinner {
  margin: 40px auto 0;
  width: 150px;
  text-align: center;
}

.error {
  color: red;
}

.spinner > div {
  width: 18px;
  height: 18px;
  /* background-color: #ff641b; */
  background-color: #42b983;
  background-color: #777;
  margin-right: 10px;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
