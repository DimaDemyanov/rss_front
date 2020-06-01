<template>
  <div class="add-resource-form">
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
    <mdb-input
      v-model="link"
      size="sm"
      label="New resource link"
      clear
      type="text"
      validate
      error="wrong"
      success="right"
    />
    <mdb-btn color="primary" size="sm" v-on:click="addResource">Add</mdb-btn>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import { SOURCE_ADD, SOURSE_ERROR } from "@/store/actions/resources";

export default {
  name: "FormsPage",
  components: {
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
      let link = this.link.trim()
      let title = this.title.trim()
      let description = this.description.trim()
      if ((link !== "") && (title !== "")) {
        let newResource = {
          link,
          title,
          description
        }
        this.$store.dispatch(
          SOURCE_ADD,
          newResource
        );
        this.link = "";
        this.title = "";
        this.description = "";
      } else {
        this.$store.commit(
          SOURCE_ERROR
        );
      }
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
  width: 90%;
}

.btn.btn-sm {
  font-size: 0.99rem;
}
</style>
