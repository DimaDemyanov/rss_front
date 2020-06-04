<template>
  <mdb-row class="add-tag-form">
    <input v-model="newTag" class="form-control form-control-sm" type="text" placeholder="New tag">
    <mdb-btn color="primary" size="sm" v-on:click="addTag">Add</mdb-btn>
  </mdb-row>
</template>

<script>
import { mdbRow, mdbInput, mdbBtn } from "mdbvue";
import { NEWS_TAG_ADD } from "@/store/actions/news";

export default {
  name: "FormsPage",
  props: ["newsID"],
  components: {
    mdbRow,
    // mdbInput,
    mdbBtn
  },
  data() {
    return {
      showModal: false,
      newTag: ""
    };
  },
  methods: {
    addTag: function() {
      let tagname = this.newTag.trim()
      if (tagname) {
        this.$store.dispatch(NEWS_TAG_ADD, {newsID: this.newsID, tagname: tagname});
        this.newTag = "";
      }
    }
  }
};
</script>

<style scoped>
.container {
  align-items: center;
}

.add-tag-form {
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
