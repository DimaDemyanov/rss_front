<template>
  <mdb-tabs
    class="user-profile-settings"
    :active="0"
    default
    :links="[
      { text: 'Profile'},
      { text: 'Password' }]"
    :transition-duration="0.5"
    transition-style="linear"
  >
    <template :slot="'Profile'">
      <mdb-container>
        <mdb-jumbotron class="text-center hoverable">
          <form>
            <mdb-avatar class="mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
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
            </div>
            <div class="text-center">
              <mdb-btn type="submit">Save</mdb-btn>
            </div>
          </form>
        </mdb-jumbotron>
      </mdb-container>
    </template>
    <template :slot="'Password'">
      <mdb-container>
        <mdb-jumbotron class="text-center hoverable">
          <form>
            <p class="h4 text-center mb-4">Change password</p>
            <div class="grey-text">
              <mdb-input
                label="New password"
                icon="lock"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div class="text-center">
              <mdb-btn type="submit">Save</mdb-btn>
            </div>
          </form>
        </mdb-jumbotron>
      </mdb-container>
    </template>
  </mdb-tabs>
</template>

<script>
import {
  mdbContainer,
  mdbTabs,
  mdbJumbotron,
  mdbBtn,
  mdbInput,
  mdbAvatar
} from "mdbvue";
import { mapState } from "vuex";

export default {
  name: "UserProfileSettings",
  components: {
    mdbContainer,
    mdbTabs,
    mdbJumbotron,
    mdbBtn,
    mdbInput,
    mdbAvatar
  },
  computed: {
    ...mapState({
      username: state => `${state.user.profile.username}`,
      email: state => `${state.user.profile.email}`
    })
  }
};
</script>

<style scoped>
.user-profile-settings {
  width: 600px;
}

.custom-file-label {
  width: 300px;
  text-align: left;
  margin: auto;
}

.img-fluid {
  padding: 5px;
}

.md-form {
  text-align: left;
}

#inputGroupFile01 {
  width: 300px;
}
</style>