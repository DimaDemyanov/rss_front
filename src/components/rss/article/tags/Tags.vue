<template>
  <div class="resources">
    <AddTagForm
        v-bind:newsID="newsID"
    />
    <ul>
      <mdb-list-group>
        <mdb-list-group-item class="tag" v-for="tag in tags" v-bind:key="tag">
          {{ tag }}
          <button
            v-on:click="removeTag(tag)"
            type="button" class="close" aria-label="Close">
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
import { NEWS_TAG_REMOVE } from "@/store/actions/news";

export default {
  name: "ListGroupPage",
  props: ["tags", "newsID"],
  components: {
    mdbListGroup,
    mdbListGroupItem,
    AddTagForm
  },
  computed: {
    // tags() {
    //   return this.$store.getters.getTags;
    // }
  },
  methods: {
    removeTag(tag) {
      this.$store.dispatch(NEWS_TAG_REMOVE, {newsID: this.newsID, tagname: tag});
    }
  }
};
</script>

<style scoped>
.resources {
  width: 90%;
}

.tag{
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
