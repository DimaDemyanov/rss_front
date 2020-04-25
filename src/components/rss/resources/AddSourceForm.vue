<template>
  <mdb-row class="add-resource-form">
    <mdb-input
      v-model="newResource"
      size="sm"
      label="New resource link"
      icon="tag"
      clear
      type="text"
      validate
      error="wrong"
      success="right"
    />
    <mdb-btn color="primary" size="sm" v-on:click="addResource">Add</mdb-btn>
  </mdb-row>
</template>

<script>
import { mdbRow, mdbInput, mdbBtn } from "mdbvue";

export default {
  name: "FormsPage",
  components: {
    mdbRow,
    mdbInput,
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
  margin-top: 1.5rem;
}

.md-form {
  width: 400px;
}

.btn.btn-sm {
  font-size: 0.99rem;
}
</style>
