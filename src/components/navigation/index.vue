<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand href="#">
      <router-link class="brand" to="/">
        <strong>Potato RSS Feeds</strong>
      </router-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item v-if="isProfileLoaded" href="#/settings/profile">{{ name }}</mdb-nav-item>
        <mdb-nav-item v-if="isAuthenticated" @click="logout">Logout</mdb-nav-item>
        <mdb-nav-item v-if="!isAuthenticated && !authLoading" href="#/login">Login</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
} from "mdbvue";
import { mapGetters, mapState } from "vuex";
import { AUTH_LOGOUT } from "../../store/actions/auth";

export default {
  name: "HelloWorld",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  },
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.username}`
    })
  }
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  color: white;
  text-decoration: none;
}
.brand {
  display: flex;
  align-items: center;
}
</style>
