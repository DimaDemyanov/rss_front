// import Vue from "vue";
import {
  SOURCES_REQUEST,
  SOURCES_UPDATE,
  SOURCE_ADD,
  SOURCE_ADD_ERROR,
  SOURCE_ADD_ADDING,
  SOURCE_REMOVE_REMOVING,
  SOURCE_REMOVE_ERROR,
  SOURCE_REMOVE,
} from "../actions/resources";


import axios from "axios";
import { config } from "@/config.js";

const sourcePath = "/sources";

const state = {
  removeStatus: "",
  addStatus: "",
  resources: []
};

const getters = {
  resources: state => state.resources
};

const actions = {
  [SOURCES_REQUEST]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      console.log(`Get Resources ${config.apiUrl + sourcePath}`)
      axios
        .get(config.apiUrl + sourcePath, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-token")}`
          }
        })
        .then(resp => {
          commit(SOURCES_UPDATE, resp.data);
          resolve(resp.data);
        })
    })
  },
  [SOURCE_ADD]: ({ commit, dispatch }, resource) => {
    return new Promise((resolve, reject) => {
      commit(SOURCE_ADD_ADDING);
      axios
        .post(config.apiUrl + sourcePath,
              resource,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("user-token")}`
                }
              })
        .then(resp => {
          commit(SOURCE_ADD, resp.data);
          resolve(resp.data);
        })
        .catch(err => {
          commit(SOURCE_ADD_ERROR);
          reject(err);
        })
    })
  },
  [SOURCE_REMOVE]: ({ commit, dispatch }, sourceID) => {
    return new Promise((resolve, reject) => {
      commit(SOURCE_REMOVE_REMOVING, sourceID);
      axios
        .delete(`${config.apiUrl}${sourcePath}/${sourceID}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("user-token")}`
                }
              })
        .then(resp => {
          commit(SOURCE_REMOVE, sourceID);
          resolve(sourceID);
        })
        .catch(err => {
          commit(SOURCE_REMOVE_ERROR, sourceID);
          reject(err);
        })
    })
  },
};

function validateResource(resource) {
  return resource.link.length != 0 && resource.title.length != 0;
}

const mutations = {
  [SOURCES_UPDATE]: (state, sources) => {
    state.resources = sources.map(x => {
      return {
        id: x.id,
        title: x.title,
        description: x.description,
        link: x.link
      }
    });
  },
  [SOURCE_ADD_ADDING]: (state) => {
    state.addStatus = "adding";
  },
  [SOURCE_ADD]: (state, source) => {
    state.addStatus = "complete";
    state.resources.unshift({
      id: source.id,
      title: source.title,
      description: source.description,
      link: source.link
    });
  },
  [SOURCE_ADD_ERROR]: (state) => {
    state.addStatus = "error";
  },
  [SOURCE_REMOVE_REMOVING]: (state, id) => {
    state.removeStatus = `removing ${id}`;
  },
  [SOURCE_REMOVE]: (state, id) => {
    state.removeStatus = `complete ${id}`;
    state.resources = state.resources.filter(x => id != x.id)
  },
  [SOURCE_REMOVE_ERROR]: (state) => {
    state.removeStatus = `error ${id}`;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
