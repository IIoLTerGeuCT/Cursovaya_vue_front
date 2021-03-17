import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ClientView from "../views/ClientView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/priceListView",
    name: "PriceListView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PriceListView.vue"),
  },
  {
    path: "/clientView",
    name: "ClientView",
    component: ClientView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
