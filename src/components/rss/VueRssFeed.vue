<template>
  <div class="vue-rss-feed">
    <Feed :limit="limit" />
  </div>
</template>

<script>
import Feed from "./Feed.vue";

export default {
  name: "VueRssFeed",
  components: {
    Feed
  },
   mounted() {

   },
  props: {
    limit: Number
  }
};
</script>

<style scoped>
.vue-rss-feed {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* max-width: 900px; */
  text-align: center;
  color: #2c3e50;
}
</style>
