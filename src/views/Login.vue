<template>
  <div class="login">
    <Login />
  </div>
</template>

<script>
import Login from "../components/login";

export default {
  name: "Demo",
  components: {
    Login
  }
};
</script>

<style scoped>
.login {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 150px;
}
</style>
