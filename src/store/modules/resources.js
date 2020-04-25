// import Vue from "vue";

let id = 1;

const state = {
  resources: []
};

const getters = {
  getResources: state => state.resources
};

const actions = {
  addResource(state, resource) {
    state.commit("addResource", resource);
  },
  removeResource(state, id) {
    state.commit("removeResource", id);
  }
};

function validateResource(resource) {
  return resource.length != 0;
}

const mutations = {
  addResource(context, resource) {
    if (validateResource(resource)) {
      state.resources.unshift({
        id: id,
        title: resource
      });
      id++;
    }
  },
  removeResource(context, id) {
    let i = 0;
    for (i = 0; i < state.resources.length; i++) {
      if (state.resources[i].id == id) {
        state.resources.splice(i, 1);
      }
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
