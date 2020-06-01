import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import auth from "./modules/auth";
import resources from "./modules/resources";
import news from "./modules/news";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user,
    auth,
    resources,
    news,
  },
  strict: debug
});
