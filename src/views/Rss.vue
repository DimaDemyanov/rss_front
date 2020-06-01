<template>
  <div class="rss">
    <div class="resources">
      <Resources />
    </div>
    <div class="filter">
      <FilterS />
    </div>
    <div class="rss-feeds">
      <VueRssFeed :limit="limit" />
    </div>
  </div>
</template>

<script>
import VueRssFeed from "@/components/rss/VueRssFeed.vue";
import Resources from "@/components/rss/resources/Resources.vue";
import FilterS from "@/components/rss/Filter.vue";

export default {
  name: "RSS",
  components: {
    VueRssFeed,
    Resources,
    FilterS
  },
  data() {
    return {
      limit: 5
    };
  }
};
</script>

<style scoped>
.resources {
  width: 25%;
  max-width: 1000px;
  position: sticky;
  float: left;
  top: 0;
  paddind: 10px;
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

