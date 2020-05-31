<template>
  <div class="rss">
    <div class="resources">
      <Resources />
    </div>
    <div class="filter">
      <FilterS />
    </div>
    <div class="rss-feeds">
      <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit" />
    </div>
  </div>
</template>

<script>
import VueRssFeed from "../components/rss/VueRssFeed.vue";
import Resources from "../components/rss/resources/Resources.vue";
import FilterS from "../components/rss/Filter.vue";

export default {
  name: "Demo",
  components: {
    VueRssFeed,
    Resources,
    FilterS
  },
  data() {
    return {
      feedUrl: "https://rss.app/feeds/hmsyAr3PyniBpmOd.xml",
      name: "",
      limit: 5
    };
  }
};
</script>

<style scoped>
.resources {
  max-width: 25%;
  position: sticky;
  float: left;
  top: 0;
}

.rss-feeds {
  /* padding-left: 25%; */
  margin: auto;
  max-width: 50%;
}

.filter {
  position: sticky;
  float: right;
  top: 0;
}
</style>

