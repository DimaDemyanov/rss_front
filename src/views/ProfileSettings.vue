<template>
  <div class="user-profile-settings">
    <UserProfileSettings />
  </div>
</template>

<script>
import UserProfileSettings from "../components/account/UserProfileSettings.vue";

export default {
  name: "Demo",
  components: {
    UserProfileSettings
  }
};
</script>

<style scoped>
.user-profile-settings {
  margin: auto;
}
</style>
