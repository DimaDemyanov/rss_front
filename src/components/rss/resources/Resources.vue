<template>
  <div class="resources-block">
    <AddSourceForm
    />
    <ul>
      <mdb-list-group>
        <mdb-list-group-item class="source" v-for="resource in resources" v-bind:key="resource.id">
          <div class="resource-info">
            <p><b>Title: </b>{{ resource.title }}</p>
            <p v-if="resource.description"><b>Description: </b> {{ resource.description }}</p>
            <p><b>Link: </b>{{ resource.link }}</p>
          </div>
          <button
            type="button"
            class="close"
            aria-label="Close"
            v-on:click="removeResource(resource.id)"
          >
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
import { SOURCE_REMOVE, SOURCES_REQUEST } from "@/store/actions/resources";

export default {
  name: "ListGroupPage",
  data: () => {
     return {
       updateInterval: undefined,
       interval: 5000
     }
  },
  components: {
    mdbListGroup,
    mdbListGroupItem,
    AddSourceForm
  },
  computed: {
    resources() {
      return this.$store.getters.resources
    }
  },
  mounted() {
    this.updateResources()
    this.updateInterval = setInterval(this.updateResources, this.interval);
  },
  beforeDestroy () {
    clearInterval(this.intervalid1)
  },
  methods: {
    updateResources() {
      this.$store.dispatch(SOURCES_REQUEST);
    },
    removeResource(id) {
      this.$store.dispatch(
        SOURCE_REMOVE,
        id
      );
    }
  }
};
</script>

<style scoped>

.resource-info {
  max-width: 100%;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
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

.resources-block {
  width: 90%;
}
</style>
