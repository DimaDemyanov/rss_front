<template>
  <div class="login">
    <form @submit.prevent="login">
      <p class="h4 text-center mb-4">Sign in</p>
      <div class="grey-text">
        <mdb-input v-model="username" label="Your username" icon="envelope" />
        <mdb-input v-model="password" label="Your password" icon="lock" type="password" />
      </div>
      <div class="text-center">
        <mdb-btn type="submit">Login</mdb-btn>
      </div>
    </form>
    <form action="#/signup" class="text-center">
      <mdb-btn type="submit">Sign up</mdb-btn>
    </form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "../../store/actions/auth";
import { mdbInput, mdbBtn } from "mdbvue";


export default {
  name: "Basic",
  components: {
    mdbInput,
    mdbBtn
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      
      let username = this.username
      let password = this.password

      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/rss");
      });
    }
  }
};
</script>
