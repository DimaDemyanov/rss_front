// import Vue from "vue";
import {
  NEWS_REQUEST_NEXT_PAGE,
  NEWS_EXPAND,
  NEWS_INC_PAGE,
  NEWS_SET_MAXPAGE,
  NEWS_ERASE,
  NEWS_LOADING,
  NEWS_LOADED,
} from "../actions/news";


import axios from "axios";
import { config } from "@/config.js";

const newsPath = "/news";

const state = {
  items: [],
  currentPage: 0,
  maxPages: 0,
  loading: true,
};

const getters = {
  isNewsLoaidng: state => state.loading,
  currentPage: state => state.currentPage,
  maxPages: state => state.maxPages,
  newsItems: state => state.items,
};

const actions = {
  [NEWS_REQUEST_NEXT_PAGE]: ({ state, commit, dispatch }, sourceID = undefined) => {
    return new Promise((resolve, reject) => {
      commit(NEWS_LOADING)
      let url = `${config.apiUrl}${newsPath}`
      let currentPage = state.currentPage
      url = url + `?page=${currentPage+1}`
      if (sourceID !== undefined) {
        url = url + `&sourceID=${sourceID}`
      }
      axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-token")}`
          }
        })
        .then(resp => {
          commit(NEWS_INC_PAGE);
          commit(NEWS_LOADED)
          commit(NEWS_SET_MAXPAGE, resp.data.pageCount);
          commit(NEWS_EXPAND, resp.data.items);
          resolve(resp.data);
        })
    })
  },
};

const mutations = {
  [NEWS_LOADING]: (state) => {
    state.loading = true;
  },
  [NEWS_LOADED]: (state) => {
    state.loading = false;
  },
  [NEWS_ERASE]: (state) => {
    state.items = []
    state.currentPage = 0
    state.maxPages = 0
  },
  [NEWS_EXPAND]: (state, items) => {
    state.items.unshift(...items);
  },
  [NEWS_INC_PAGE]: (state) => {
    state.currentPage += 1;
  },
  [NEWS_SET_MAXPAGE]: (state, maxPage) => {
    state.maxPage = maxPage;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
