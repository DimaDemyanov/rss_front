<template>
  <div class="resources">
    <AddTagForm />
    <ul>
      <mdb-list-group>
        <mdb-list-group-item class="source" v-for="tag in tags" v-bind:key="tag.id">
          {{ tag.name }}
          <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </mdb-list-group-item>
      </mdb-list-group>
    </ul>
  </div>
</template>

<script>
import { mdbListGroup, mdbListGroupItem } from "mdbvue";
import AddTagForm from "./AddTagForm";

export default {
  name: "ListGroupPage",
  components: {
    mdbListGroup,
    mdbListGroupItem,
    AddTagForm
  },
  computed: {
    tags() {
      return this.$store.getters.getTags;
    }
  },
  methods: {
    removeTag(id) {
      this.$store.dispatch("removeTags", id);
    }
  }
};
</script>

<style scoped>
.resources {
  width: 500px;
}

.source {
  display: block;
  border: 1px solid #bbbbbb;
}

.remove-button {
  right: 3px;
  position: absolute;
}

.btn {
  margin: 0;
  font-size: 0.7rem;
}

.btn-secondary {
  background-color: royalblue !important;
}
</style>
