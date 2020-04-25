<template>
  <div class="resources">
    <AddSourceForm />
    <ul>
      <mdb-list-group>
        <mdb-list-group-item class="source" v-for="resource in resources" v-bind:key="resource.id">
          {{ resource.title }}
          <button type="button" class="close" aria-label="Close" v-on:click="removeResource(resource.id)">
            <span aria-hidden="true">&times;</span>
          </button>
        </mdb-list-group-item>
      </mdb-list-group>
    </ul>
  </div>
</template>

<script>
import { mdbListGroup, mdbListGroupItem } from "mdbvue";
import AddSourceForm from "./AddSourceForm";

export default {
  name: "ListGroupPage",
  components: {
    mdbListGroup,
    mdbListGroupItem,
    AddSourceForm
  },
  computed: {
    resources() {
      return this.$store.getters.getResources;
    }
  },
  methods: {
    removeResource(id) {
      this.$store.dispatch("removeResource", id);
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
