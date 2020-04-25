<template>
  <mdb-row class="add-resource-form">
    <input class="form-control form-control-sm" type="text" placeholder="New tag">
    <mdb-btn color="primary" size="sm" v-on:click="addResource">Add</mdb-btn>
  </mdb-row>
</template>

<script>
import { mdbRow, mdbInput, mdbBtn } from "mdbvue";

export default {
  name: "FormsPage",
  components: {
    mdbRow,
    // mdbInput,
    mdbBtn
  },
  data() {
    return {
      showModal: false,
      newResource: ""
    };
  },
  methods: {
    addResource: function() {
      this.$store.dispatch("addResource", this.newResource);
      this.newResource = "";
    }
  }
};
</script>

<style scoped>
.container {
  align-items: center;
}

.add-resource-form {
  padding-left: 30px;
}

.ripple-parent {
  height: 40px;
}

.form-control-sm {
  width: 150px;
}

.btn {
  margin-top: 0;
  height: 30px;
}

</style>
