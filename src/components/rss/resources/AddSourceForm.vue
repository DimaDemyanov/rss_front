<template>
  <mdb-row class="add-resource-form">
    <mdb-input
      v-model="link"
      size="sm"
      label="New resource link"
      icon="tag"
      clear
      type="text"
      validate
      error="wrong"
      success="right"
    />
    <mdb-input
      v-model="title"
      size="sm"
      label="Title"
      clear
      type="text"
      validate
      error="wrong"
      success="right"
    />
    <mdb-input
      v-model="description"
      size="sm"
      label="Description"
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
      link: "", 
      title: "",
      description: ""
    };
  },
  methods: {
    addResource: function() {
      let link = this.link
      let title = this.title
      let description = this.description
      this.$store.dispatch("addResource", {
        link,
        title,
        description
      });
      this.link = "";
      this.title = "";
      this.description = "";
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

.add-resource-form {
  border: 3px;
}
</style>
