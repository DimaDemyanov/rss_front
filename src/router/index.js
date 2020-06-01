import Vue from "vue";
import VueRouter from "vue-router";
import Rss from "../views/Rss";
import Login from "../views/Login";
import ProfileSettings from "../views/ProfileSettings";
import SignUp from "../views/SignUp";
import store from "../store";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: "/",
    redirect: "/rss"
  },
  {
    path: "/rss",
    name: "Rss Feed",
    component: Rss,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/settings/profile",
    name: "ProfileSettings",
    component: ProfileSettings,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  }
];

const router = new VueRouter({
  routes
});

export default router;
