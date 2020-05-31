<template>
  <div class="filter">
    <b-button :pressed.sync="isOnlyFavorite" variant="primary">Only favorite</b-button>
  </div>
</template>

<script>
export default {
  name: "Filter",
  components: {},
  props: {},
  data() {
    return {
      isOnlyFavorite: false
    };
  }
};
</script>

<style scoped>
.filter {
  /* width: 400px;
  height: 100px; */
  /* background-color: salmon; */
}
</style>
