<template>
  <div id="app">
    <Navigation />
    <div class="app-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/navigation/index.vue";

export default {
  components: {
    Navigation
  },
  name: "app",
  created: function() {
    // if (this.$store.getters.isAuthenticated) {
    //   this.$store.dispatch(USER_REQUEST);
    // }
  }
};
</script>>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
