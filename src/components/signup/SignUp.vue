<template>
  <mdb-container class="sign-up-container">
    <mdb-jumbotron class="text-center hoverable">
      <form @submit.prevent="signup">
        <mdb-avatar class="mx-auto">
          <img
            src="https://image.flaticon.com/icons/svg/18/18601.svg"
            class="rounded-circle img-fluid"           
          />
        </mdb-avatar>
        <div class="input-group">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label class="custom-file-label" for="inputGroupFile01">Upload new avatar</label>
          </div>
        </div>
        <div class="grey-text">
          <mdb-input
            v-model="username"
            label="Username"
            icon="user"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="email"
            label="Email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="password"
            label="Password"
            icon="lock"
            group
            type="password"
            validate
            error="wrong"
            success="right"
          />
        </div>
        <div class="text-center">
          <mdb-btn type="submit">SIGN UP</mdb-btn>
        </div>
      </form>
    </mdb-jumbotron>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbJumbotron,
  mdbBtn,
  mdbInput,
  mdbAvatar
} from "mdbvue";
import axios from "axios";
import { config } from "../../config.js";

const signUpPath = '/user/registrate'

export default {
  name: "SignUp",
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbBtn,
    mdbInput,
    mdbAvatar
  },
  methods: {
    signup: function() {
      const username = this.username;
      const password = this.password;
      const email = this.email;

      let data = {
        username,
        password,
        email
      }

      axios.post(config.apiUrl + signUpPath, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => { 
        if (response.status == 200) {
          this.$router.push("/login")
        }
      });
    }
  },
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.sign-up-container {
  width: 600px;
  margin-top: 10px;
}

.text-center {
  text-align: center;
}

.custom-file-label {
  width: 300px;
  text-align: left;
  margin: auto;
}

.img-fluid {
  padding: 5px;
  max-width: 60%;
  height: auto;
}

.md-form {
  text-align: left;
}

#inputGroupFile01 {
  width: 300px;
}
</style>
