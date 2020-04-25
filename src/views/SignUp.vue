<template>
  <div class="sign-up">
    <SignUp />
  </div>
</template>

<script>
import SignUp from "../components/signup/SignUp.vue";

export default {
  name: "SignUpView",
  components: {
    SignUp
  }
};
</script>

<style scoped>
.sign-up {
  margin: auto;
}
</style>
