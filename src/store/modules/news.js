// import Vue from "vue";
import {
  NEWS_REQUEST_NEXT_PAGE,
  NEWS_EXPAND,
  NEWS_INC_PAGE,
  NEWS_SET_MAXPAGE,
  NEWS_ERASE,
  NEWS_LOADING,
  NEWS_LOADED,
  NEWS_SWAP_FAVOURITE,
  NEWS_TAG_ADD,
  NEWS_TAG_REMOVE,
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
  [NEWS_TAG_ADD]: ({ state, commit, dispatch }, {newsID, tagname}) => {
    return new Promise((resolve, reject) => {
      let url = `${config.apiUrl}${newsPath}/${newsID}/addTag/${tagname}`
      axios
        .put(url, {}, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-token")}`
          }
        })
        .then(resp => {
          commit(NEWS_TAG_ADD, {newsID, tagname});
          resolve(resp.data);
        })
    })
  },
  [NEWS_TAG_REMOVE]: ({ state, commit, dispatch }, {newsID, tagname}) => {
    return new Promise((resolve, reject) => {
      let url = `${config.apiUrl}${newsPath}/${newsID}/removeTag/${tagname}`
      axios
        .delete(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-token")}`
          }
        })
        .then(resp => {
          commit(NEWS_TAG_REMOVE, {newsID, tagname});
          resolve(resp.data);
        })
    })
  },
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
  [NEWS_SWAP_FAVOURITE]: ({ state, commit, dispatch }, newsID) => {
    return new Promise((resolve, reject) => {
      let url = `${config.apiUrl}${newsPath}/${newsID}/swapfavourite`
      axios
        .patch(url, {}, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-token")}`
          }
        })
        .then(resp => {
          commit(NEWS_SWAP_FAVOURITE, newsID);
          resolve(resp.data);
        })
    })
  },
};

const mutations = {
  [NEWS_TAG_ADD]: (state, {newsID, tagname}) => {
    let news = state.items.find(item => item.id === newsID)
    if (news) {
      if (!news.tags.find(tag => tag === tagname)) {
        news.tags.unshift(tagname);
      }
    }
  },
  [NEWS_TAG_REMOVE]: (state, {newsID, tagname}) => {
    let news = state.items.find(item => item.id === newsID)
    if (news) {
      news.tags = news.tags.filter(tag => tag !== tagname)
    }
  },
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
    state.items = state.items.concat(items);
  },
  [NEWS_INC_PAGE]: (state) => {
    state.currentPage += 1;
  },
  [NEWS_SET_MAXPAGE]: (state, maxPage) => {
    state.maxPage = maxPage;
  },
  [NEWS_SWAP_FAVOURITE]: (state, newsID) => {
    let news = state.items.find(item => item.id === newsID)
    if (news) {
      news.favourite = !news.favourite;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
