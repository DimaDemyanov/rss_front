<template>
  <div class="rss">
    <div class="resources">
      <Resources />
    </div>
    <div class="rss-feeds">
      <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit" />
    </div>
    <div class="filter">
      <FilterS />
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
  position: sticky;
  float: left;
  top: 0;
}

.rss-feeds {
  padding-left: 600px;
}

.filter {
  position: absolute;
  right: 0;
  top: 38px;
  /* width: 500px; */
  /* height: 100px; */
  /* background-color: salmon; */
}
</style>

