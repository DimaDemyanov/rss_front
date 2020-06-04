<template>
  <div class="filter">
    <mdb-row class="add-resource-form">
      <input class="form-control form-control-sm" type="text" placeholder="Tag to search" />
      <mdb-btn color="primary" size="sm" v-on:click="addResource">Search</mdb-btn>
    </mdb-row>
    <b-button class="favorite-button" :pressed.sync="isOnlyFavorite" variant="primary">Only favorite</b-button>
  </div>
</template>

<script>
import { mdbRow, mdbBtn } from "mdbvue";

export default {
  name: "Filter",
  components: {
    mdbRow,
    mdbBtn
  },
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
  margin: auto;
   width: 300px;
  /* height: 100px; */
  /* background-color: salmon; */
}

.form-control-sm {
  width: 150px;
}

.btn {
  margin-top: 0;
}

.favorite-button.btn-primary {
	background-color: rgb(218, 215, 76) !important;
	border-color: #000;
}

.favorite-button.btn-primary.active {
	background-color: rgb(228, 228, 213) !important;
	border-color: #000;
}
</style>
